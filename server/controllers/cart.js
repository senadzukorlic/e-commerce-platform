const Cart = require("../models/cart")
const CartProducts = require("../models/cart-products")
const Products = require("../models/products")
const User = require("../models/user")

// exports.addToCart = (req, res, next) => {
//   const productId = req.params.productId
//   let userId
//   let fetchedCart
//   User.findByPk(req.userId)
//     .then((user) => {
//       userId = user.id
//       return Cart.findOne({ where: { userId: userId } })
//     })
//     .then((cart) => {
//       if (!cart) {
//         return Cart.create({ userId: userId })
//       }
//       return cart
//     })
//     .then((cart) => {
//       fetchedCart = cart
//       return CartProducts.findOne({
//         where: { productId: productId, cartId: cart.id },
//         include: [{ model: Products }],
//       })
//     })
//     .then((exhistingOne) => {
//       let productPrice
//       if (exhistingOne) {
//         const newQuantity = exhistingOne.quantity + 1
//         const newTotalPrice = newQuantity * exhistingOne.Product.price
//         productPrice = exhistingOne.Product.price
//         return exhistingOne
//           .update({
//             quantity: newQuantity,
//             productId: productId,
//             cartId: fetchedCart.id,
//             totalPrice: newTotalPrice,
//           })
//           .then(() => {
//             // Ažuriraj ukupnu cenu korpe
//             fetchedCart.totalPrice += exhistingOne.Product.price
//             return fetchedCart.save()
//           })
//       } else {
//         return CartProducts.create({
//           productId: productId,
//           cartId: fetchedCart.id,
//           quantity: 1,
//           totalPrice: productPrice,
//         }).then(() => {
//           // Ažuriraj ukupnu cenu korpe
//           fetchedCart.totalPrice += productPrice
//           return fetchedCart.save()
//         })
//       }
//     })
//     .then((result) => {
//       res
//         .status(200)
//         .json({ message: "Product added to cart", product: result })
//     })
//     .catch((err) => {
//       if (!err.statusCode) {
//         err.statusCode = 500
//       }
//       next(err)
//     })
// }

exports.addToCart = (req, res, next) => {
  const productId = req.params.productId
  let userId
  let fetchedCart
  let productPrice

  User.findByPk(req.userId)
    .then((user) => {
      userId = user.id
      return Cart.findOne({ where: { userId: userId } })
    })
    .then((cart) => {
      if (!cart) {
        return Cart.create({ userId: userId })
      }
      return cart
    })
    .then((cart) => {
      fetchedCart = cart

      // Pronađi proizvod i cenu
      return Products.findByPk(productId)
    })
    .then((product) => {
      if (!product) {
        const error = new Error("Product not found")
        error.statusCode = 404
        throw error
      }
      productPrice = product.price // Postavi cenu proizvoda

      // Proveri da li proizvod već postoji u korpi
      return CartProducts.findOne({
        where: { productId: productId, cartId: fetchedCart.id },
      })
    })
    .then((existingProduct) => {
      if (existingProduct) {
        // Ako postoji, ažuriraj količinu i ukupnu cenu
        const newQuantity = existingProduct.quantity + 1
        const newTotalPrice = newQuantity * productPrice

        return existingProduct.update({
          quantity: newQuantity,
          totalPrice: newTotalPrice,
        })
      } else {
        // Ako ne postoji, kreiraj novi zapis
        return CartProducts.create({
          productId: productId,
          cartId: fetchedCart.id,
          quantity: 1,
          totalPrice: productPrice,
        })
      }
    })
    .then(() => {
      // Ažuriraj totalPrice korpe
      fetchedCart.totalPrice += productPrice
      return fetchedCart.save()
    })
    .then((updatedCart) => {
      res
        .status(200)
        .json({ message: "Product added to cart", cart: updatedCart })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.getCart = (req, res, next) => {
  User.findByPk(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404
        throw error
      }
      return Cart.findOne({
        where: { userId: user.id },
        include: [
          {
            model: CartProducts,
            include: [Products],
          },
        ],
      })
    })
    .then((cart) => {
      if (!cart) {
        const error = new Error("User doesn't have cart")
        error.statusCode = 404
        throw error
      }
      res.status(200).json({ message: "Cart fetched", cart: cart })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

// exports.updateProductQuanityInCart = (req, res, next) => {
//   const productId = req.params.productId
//   const quantity = req.body.quantity
//   let fetchedCart

//   User.findByPk(req.userId)
//     .then((user) => {
//       return Cart.findOne({ where: { userId: user.id } })
//     })
//     .then((cart) => {
//       fetchedCart = cart
//       return CartProducts.findOne({
//         where: { cartId: cart.id, productId: productId },
//       })
//     })
//     .then((product) => {
//       product.quantity = quantity
//       product.totalPrice = product.quantity * product.price
//       fetchedCart.totalPrice =  product.totalPrice - product.totalPrice
//       return product.save()
//     })
//     .then((result) => {
//       res
//         .status(200)
//         .json({ message: "Product updated in cart", product: result })
//     })
//     .catch((err) => {
//       if (!err.statusCode) {
//         err.statusCode = 500
//       }
//       next(err)
//     })
// }

exports.updateProductQuanityInCart = (req, res, next) => {
  const productId = req.params.productId
  const newQuantity = req.body.quantity
  let fetchedCart
  let fetchedProduct

  User.findByPk(req.userId)
    .then((user) => {
      return Cart.findOne({ where: { userId: user.id } })
    })
    .then((cart) => {
      fetchedCart = cart
      if (!cart) {
        const error = new Error("Cart does not exist")
        error.statusCode = 404
        throw error
      }
      return CartProducts.findOne({
        where: { cartId: cart.id, productId: productId },
        include: [{ model: Products }], // Products umesto Product
      })
    })
    .then((cartProduct) => {
      if (!cartProduct) {
        const error = new Error("Product not found in cart")
        error.statusCode = 404
        throw error
      }

      fetchedProduct = cartProduct
      const oldTotalPrice = cartProduct.totalPrice
      console.log("Old total price:", oldTotalPrice)

      // Promenjeno Product u product
      const newTotalPrice = newQuantity * cartProduct.product.price
      console.log("New total price:", newTotalPrice)

      // Ažuriraj totalPrice u Cart modelu
      fetchedCart.totalPrice =
        fetchedCart.totalPrice - oldTotalPrice + newTotalPrice
      console.log("New cart total:", fetchedCart.totalPrice)

      // Ažuriraj CartProducts
      cartProduct.quantity = newQuantity
      cartProduct.totalPrice = newTotalPrice

      return fetchedCart.save()
    })
    .then(() => {
      return fetchedProduct.save()
    })
    .then(() => {
      res.status(200).json({
        message: "Product quantity updated",
        cartTotal: fetchedCart.totalPrice,
        productTotal: fetchedProduct.totalPrice,
      })
    })
    .catch((err) => {
      console.error("Error occurred:", err)
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.deleteProductFromCart = (req, res, next) => {
  const productId = req.params.productId
  let fetchedCart
  let productToDelete
  User.findByPk(req.userId)
    .then((user) => {
      return Cart.findOne({ where: { userId: user.id } })
    })
    .then((cart) => {
      fetchedCart = cart
      if (!cart) {
        const error = new Error("Carts does not exist")
        error.statusCode = 404
        throw error
      }
      return CartProducts.findOne({
        where: { cartId: cart.id, productId: productId },
        include: [{ model: Products }], // Povezivanje sa modelom Product
      })
    })
    .then((product) => {
      if (!product) {
        const error = new Error("Product not found in cart")
        error.statusCode = 404
        throw error
      }
      productToDelete = product

      // Ažuriraj totalPrice u Cart modelu pre brisanja proizvoda
      fetchedCart.totalPrice -= productToDelete.totalPrice

      return fetchedCart.save()
    })
    .then(() => {
      // Zatim obriši proizvod iz CartProducts
      return productToDelete.destroy()
    })
    .then((result) => {
      res.status(200).json({ message: "Product successfuly deleted from cart" })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
