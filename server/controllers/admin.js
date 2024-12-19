const { where } = require("sequelize")
const Cart = require("../models/cart")
const CartProducts = require("../models/cart-products")
const Products = require("../models/products")
const User = require("../models/user")
const Order = require("../models/order")
const OrderProducts = require("../models/order-products")

//ODRADITI DODATNE PROVERE DA LI JE KORISNIK ADMIN,DA LI SU SVE VREDNOSTI UNESENE I DA LI SU ISPRAVNE..

exports.getProducts = (req, res, next) => {
  User.findByPk(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found")
        error.statusCode = 402
        throw error
      }
      return user.getProducts()
    })
    .then((products) => {
      res.status(200).json({ products: products })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.createProduct = (req, res, next) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const size = req.body.size

  User.findByPk(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404
        throw error
      }
      return user.createProduct({
        //moguce je koristiti metodu createProduct jer smo definisali relaciju izmedju User i Product modela
        title: title,
        imageUrl: imageUrl,
        price: price,
        size: size,
      })
    })
    .then((result) => {
      res.status(201).json({ message: "Product created", product: result })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId

  Products.findByPk(productId)
    .then((post) => {
      if (!post) {
        const error = new Error("Could not find post.")
        error.statusCode = 404 //404 (Not Found) koristi se da označi da server nije mogao da pronađe resurs koji je klijent tražio
        throw error
      }
      return post.destroy()
    })
    .then((result) => {
      res.status(200).json({ message: "Product deleted sucessfully" })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.editProduct = (req, res, next) => {
  const productId = req.params.productId

  const price = req.body.price
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const size = req.body.size

  Products.findByPk(productId)
    .then((product) => {
      if (!product) {
        const error = new Error("Product not found")
        error.statusCode = 404
        throw error
      }
      ;(product.price = price),
        (product.title = title),
        (product.size = size),
        (product.imageUrl = imageUrl)
      return product.save()
    })
    .then((result) => {
      res.status(200).json({ message: "Post updated", product: result })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.addToCart = (req, res, next) => {
  const productId = req.params.productId
  let userId
  let fetchedCart
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
      return CartProducts.findOne({
        where: { productId: productId, cartId: cart.id },
      })
    })
    .then((exhistingOne) => {
      if (exhistingOne) {
        return exhistingOne.update({
          quantity: exhistingOne.quantity + 1,
          productId: productId,
          cartId: fetchedCart.id,
        })
      } else {
        return CartProducts.create({
          productId: productId,
          cartId: fetchedCart.id,
          quantity: 1,
        })
      }
    })
    .then((result) => {
      res
        .status(200)
        .json({ message: "Product added to cart", product: result })
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

exports.updateProductQuanityInCart = (req, res, next) => {
  const productId = req.params.productId
  const quantity = req.body.quantity

  User.findByPk(req.userId)
    .then((user) => {
      return Cart.findOne({ where: { userId: user.id } })
    })
    .then((cart) => {
      return CartProducts.findOne({
        where: { cartId: cart.id, productId: productId },
      })
    })
    .then((product) => {
      product.quantity = quantity
      product.totalPrice = product.quantity * product.price
      return product.save()
    })
    .then((result) => {
      res
        .status(200)
        .json({ message: "Product updated in cart", product: result })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.deleteProductFromCart = (req, res, next) => {
  const productId = req.params.productId

  User.findByPk(req.userId)
    .then((user) => {
      return Cart.findOne({ where: { userId: user.id } })
    })
    .then((cart) => {
      if (!cart) {
        const error = new Error("Carts does not exist")
        error.statusCode = 404
        throw error
      }
      return CartProducts.findOne({
        where: { cartId: cart.id, productId: productId },
      })
    })
    .then((product) => {
      if (!product) {
        const error = new Error("Product not found in cart")
        error.statusCode = 404
        throw error
      }
      return product.destroy()
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

exports.createOrder = (req, res, next) => {
  let USER
  let CART
  const paymentMethod = req.body.paymentMethod
  const deliveryInfo = req.body.deliveryInfo

  User.findByPk(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404
        throw error
      }
      USER = user
      return Cart.findOne({ where: { userId: user.id } })
    })
    .then((cart) => {
      if (!cart) {
        const error = new Error("Cart not found")
        error.statusCode = 404
        throw error
      }
      CART = cart

      return Order.findOne({ where: { cartId: cart.id, userId: USER.id } })
    })
    .then((existingOrder) => {
      if (existingOrder) {
        const error = new Error("Order already exists")
        error.statusCode = 400
        throw error
      }
      return Order.create({
        userId: USER.id,
        cartId: CART.id,
        paymentMethod: paymentMethod,
        deliveryInfo: deliveryInfo,
        totalPrice: 0,
      })
    })
    .then((newOrder) => {
      // Pronađi sve proizvode u korpi zajedno sa podacima o proizvodima
      return CartProducts.findAll({
        where: { cartId: CART.id },
        include: [{ model: Product, attributes: ["price"] }], // Povezivanje sa modelom Product
      }).then((cartProducts) => {
        // Kreiraj unose u `OrderProducts`
        const orderProductsPromises = cartProducts.map((cartProduct) => {
          return OrderProducts.create({
            orderId: newOrder.id,
            productId: cartProduct.productId,
            quantity: cartProduct.quantity, // Ako je potrebna količina
          })
        })

        // Izračunaj ukupnu cenu narudžbine
        const totalPrice = cartProducts.reduce((acc, cartProduct) => {
          return acc + cartProduct.quantity * cartProduct.Product.price // Koristi povezane podatke o ceni
        }, 0)

        return Promise.all(orderProductsPromises).then(() => {
          newOrder.totalPrice = totalPrice
          return newOrder.save()
        })
      })
    })
    .then((finalOrder) => {
      // Obriši korpu
      return CART.destroy().then(() => {
        res.status(201).json({
          message: "Order created successfully",
          order: finalOrder,
        })
      })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
