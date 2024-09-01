import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "./Components/NavBar/navBar" // Dodan camelCase naziv

import Home from "./Pages/Home/home" // Dodan camelCase naziv
import Men from "./Pages/Men/men" // Dodan camelCase naziv
import Women from "./Pages/Women/women" // Dodan camelCase naziv
import Sport from "./Pages/Sport/sport" // Dodan camelCase naziv
import Electronics from "./Pages/Electronics/electronics" // Dodan camelCase naziv
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword" // Dodan camelCase naziv

import { ShoppingCart } from "./Pages/ShoppingCart/shoppingCart" // Dodan camelCase naziv
import { ProductDetailPage } from "./Pages/ProductDetailPage/productDetail" // Dodan camelCase naziv
import { Favorite } from "./Pages/Favorite/favorite" // Dodan camelCase naziv
import { About } from "./Pages/About/about" // Dodan camelCase naziv
import { Checkout } from "./Pages/Checkout/checkout" // Dodan camelCase naziv
import { Register } from "./Pages/Register/register" // Dodan camelCase naziv
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html,body {
  
    margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
 font-family: "Roboto";
}
`

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product-detail-page" element={<ProductDetailPage />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
