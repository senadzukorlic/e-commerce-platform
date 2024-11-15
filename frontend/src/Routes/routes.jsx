import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { ProtectedRoute } from "./protectedRoute"
import Home from "../Pages/Home/home"
import Men from "../Pages/Men/men"
import Women from "../Pages/Women/women"
import Sport from "../Pages/Sport/sport"
import Electronics from "../Pages/Electronics/electronics"
import ForgotPassword from "../Pages/ForgotPassword/forgotPassword"
import { ShoppingCart } from "../Pages/ShoppingCart/shoppingCart"
import { ProductDetailPage } from "../Pages/ProductDetailPage/productDetail"
import { Favorite } from "../Pages/Favorite/favorite"
import { About } from "../Pages/About/about"
import { Checkout } from "../Pages/Checkout/checkout"
import { Register } from "../Pages/Register/register"

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/product-detail-page" element={<ProductDetailPage />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/checkout" element={<Checkout />} />
      <Route path="/signup" element={<Register />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
