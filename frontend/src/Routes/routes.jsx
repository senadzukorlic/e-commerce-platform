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
      <Route
        path="/men"
        element={
          <ProtectedRoute>
            <Men />
          </ProtectedRoute>
        }
      />
      <Route
        path="/women"
        element={
          <ProtectedRoute>
            <Women />
          </ProtectedRoute>
        }
      />
      <Route
        path="/electronics"
        element={
          <ProtectedRoute>
            <Electronics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sport"
        element={
          <ProtectedRoute>
            <Sport />
          </ProtectedRoute>
        }
      />
      <Route
        path="/shopping-cart"
        element={
          <ProtectedRoute>
            <ShoppingCart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product-detail-page"
        element={
          <ProtectedRoute>
            <ProductDetailPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favorite"
        element={
          <ProtectedRoute>
            <Favorite />
          </ProtectedRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <ProtectedRoute>
            <ForgotPassword />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
