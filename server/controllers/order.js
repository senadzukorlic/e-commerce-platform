const Cart = require("../models/cart")
const CartProducts = require("../models/cart-products")
const Products = require("../models/products")
const User = require("../models/user")
const Order = require("../models/order")
const OrderProducts = require("../models/order-products")

// exports.createOrder = (req, res, next) => {
//   const cartId = req.params.cartId

//   const email = req.body.email
//   const firstname = req.body.firstname
//   const lastName = req.body.lastName
//   const address = req.body.address
//   const city = req.body.city
//   const postalCode = req.body.postalCode
//   const phoneNumber = req.body.phoneNumber
//   const paymentMethod = req.body.paymentMethod

//   let IdOfUser
//   let priceOfCart
//   let prodToOrder

//   User.findByPk(req.userId)
//     .then((user) => {
//       IdOfUser = user.id
//       return Cart.findOne({ where: { userId: IdOfUser } })
//     })
//     .then((cart) => {
//       priceOfCart = cart.totalPrice
//       return CartProducts.findAll({
//         where: { cartId: cartId },
//         attributes: ["productId"],
//       })
//     })
//     .then((products) => {
//       prodToOrder = products
//       Order.findOne({ where: { userId: IdOfUser } })
//         .then((exhistingOrder) => {
//           if (exhistingOrder) {
//             const error = new Error("Order already exists")
//             error.statusCode = 400
//             throw error
//           }
//           return Order.create({
//             userId: IdOfUser,
//             cartId: cartId,
//             totalPrice: priceOfCart,
//             email,
//             firstname,
//             lastName,
//             address,
//             city,
//             postalCode,
//             phoneNumber,
//             paymentMethod,
//           })
//         })
//         .then((order) => {
//           const orderProductPromises = prodToOrder.map((cartProduct) => {
//             return OrderProducts.create({
//               orderId: order.id,
//               productId: cartProduct.productId,
//             })
//           })

//           return Promise.all(orderProductPromises).then(() => order)
//         })
//         .then((order) => {
//           res.status(201).json({
//             message: "Order is successfully created",
//             orderId: order.id,
//           })
//         })
//     })
//     .catch((error) => {
//       if (!error.statusCode) {
//         error.statusCode = 500
//       }
//       next(error)
//     })
// }

exports.createOrder = (req, res, next) => {
  const cartId = req.params.cartId
  // console.log("Primljeni cartId:", cartId)
  // console.log("Primljeni req.params:", req.params)

  const {
    email,
    firstName,
    lastName,
    address,
    city,
    postalCode,
    phoneNumber,
    paymentMethod,
  } = req.body

  let IdOfUser
  let priceOfCart

  User.findByPk(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("Korisnik nije pronađen")
        error.statusCode = 404
        throw error
      }
      IdOfUser = user.id

      return Cart.findOne({
        where: {
          id: cartId,
          userId: IdOfUser,
        },
      })
    })
    .then((cart) => {
      if (!cart) {
        throw new Error("Korpa nije pronađena")
      }
      priceOfCart = cart.totalPrice

      return CartProducts.findAll({
        where: {
          cartId: cart.id,
        },
      })
    })
    .then((cartProducts) => {
      if (!cartProducts || cartProducts.length === 0) {
        throw new Error("Nema proizvoda u korpi")
      }

      return Order.create({
        userId: IdOfUser,
        cartId: cartId,
        totalPrice: priceOfCart,
        email,
        firstName,
        lastName,
        address,
        city,
        postalCode,
        phoneNumber,
        paymentMethod,
      }).then((order) => {
        const orderProductPromises = cartProducts.map((cartProduct) => {
          return OrderProducts.create({
            orderId: order.id,
            productId: cartProduct.productId,
            quantity: cartProduct.quantity,
          })
        })

        return Promise.all(orderProductPromises)
        // .then(() => {

        //   return CartProducts.destroy({
        //     where: { cartId: cartId },
        //   })
        // })
        // .then(() => {

        //   return Cart.destroy({
        //     where: { id: cartId },
        //   })
        // })
        // .then(() => order)
      })
    })
    .then((order) => {
      res.status(201).json({
        message: "Narudžba je uspješno kreirana",
        orderId: order.id,
      })
    })
    .catch((error) => {
      console.log("Error u createOrder:", error.message)
      if (!error.statusCode) {
        error.statusCode = 500
      }
      next(error)
    })
}
