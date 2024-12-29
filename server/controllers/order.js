const Cart = require("../models/cart")
const CartProducts = require("../models/cart-products")
const Products = require("../models/products")
const User = require("../models/user")
const Order = require("../models/order")
const OrderProducts = require("../models/order-products")

exports.createOrder = (req, res, next) => {
  const cartId = req.params.cartId

  const email = req.body.email
  const firstname = req.body.firstname
  const lastName = req.body.lastName
  const address = req.body.address
  const city = req.body.city
  const postalCode = req.body.postalCode
  const phoneNumber = req.body.phoneNumber
  const paymentMethod = req.body.paymentMethod

  let IdOfUser
  let priceOfCart
  let prodToOrder

  User.findByPk(req.userId)
    .then((user) => {
      IdOfUser = user.id
      return Cart.findOne({ where: { userId: IdOfUser } })
    })
    .then((cart) => {
      priceOfCart = cart.totalPrice
      return CartProducts.findAll({
        where: { cartId: cartId },
        attributes: ["productId"],
      })
    })
    .then((products) => {
      prodToOrder = products
      Order.findOne({ where: { userId: IdOfUser } })
        .then((exhistingOrder) => {
          if (exhistingOrder) {
            const error = new Error("Order already exists")
            error.statusCode = 400
            throw error
          }
          return Order.create({
            userId: IdOfUser,
            cartId: cartId,
            totalPrice: priceOfCart,
            email,
            firstname,
            lastName,
            address,
            city,
            postalCode,
            phoneNumber,
            paymentMethod,
          })
        })
        .then((order) => {
          return OrderProducts.create({
            orderId: order.id,
            productId: prodToOrder,
          })
        })
        .then((result) => {
          res.status(201).json({
            message: "Order is successfuly created",
          })
        })
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500
      }
      next(error)
    })
}
