const express = require("express")
const route = express.Router()

const adminRoutes = require("../controllers/admin")
const isAuth = require("../middleware/isAuth")

route.post("/create-your-own-product", isAuth, adminRoutes.createProduct)

module.exports = route
