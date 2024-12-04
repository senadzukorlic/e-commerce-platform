const express = require("express")
const route = express.Router()

const adminRoutes = require("../controllers/admin")
const isAuth = require("../middleware/isAuth")

route.get("/my-products", isAuth, adminRoutes.getProducts)
route.post("/my-products", isAuth, adminRoutes.createProduct)
route.delete("/my-products/:productId", isAuth, adminRoutes.deleteProduct)
route.patch("/my-products/:productId", isAuth, adminRoutes.editProduct)
route.post("/my-products/:productId", isAuth, adminRoutes.addToCart)
route.get("/my-products", isAuth, adminRoutes.getCart)
route.delete(
  "/my-products/delete-product-from-cart/:productId",
  isAuth,
  adminRoutes.deleteProductFromCart
)

module.exports = route
