const express = require("express")
const route = express.Router()

const adminRoutes = require("../controllers/admin")
const isAuth = require("../middleware/isAuth")

route.get("/my-products", isAuth, adminRoutes.getProducts)
route.post("/my-products", isAuth, adminRoutes.createProduct)
route.delete("/my-products/:productId", isAuth, adminRoutes.deleteProduct)
route.put("/my-products/:productId", isAuth, adminRoutes.editProduct)
module.exports = route
