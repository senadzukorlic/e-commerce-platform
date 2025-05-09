const express = require("express")
const route = express.Router()
const orderRoutes = require("../controllers/order")
const isAuth = require("../middleware/isAuth")

route.post("/create-order/:cartId", isAuth, orderRoutes.createOrder)

module.exports = route
