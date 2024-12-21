const express = require("express")
const route = express.Router()

const cartRoutes = require("../controllers/cart")
const isAuth = require("../middleware/isAuth")

route.post("/my-products/:productId", isAuth, cartRoutes.addToCart)
route.get("/my-products/get-cart", isAuth, cartRoutes.getCart)
route.delete(
  "/my-products/delete-product-from-cart/:productId",
  isAuth,
  cartRoutes.deleteProductFromCart
)
route.patch(
  "/my-products/update-product-quantity/:productId",
  isAuth,
  cartRoutes.updateProductQuanityInCart
)

module.exports = route
