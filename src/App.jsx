import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "./Components/NavBar/navBar"

import Home from "./Pages/Home/home"
import Men from "./Pages/Men/men"
import Women from "./Pages/Women/women"
import Sport from "./Pages/Sport/sport"
import Electronics from "./Pages/Electronics/electronics"
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword"

import { ShoppingCart } from "./Pages/ShoppingCart/shoppingCart"
import { ProductDetailPage } from "./Pages/ProductDetailPage/productDetail"
import { Favorite } from "./Pages/Favorite/favorite"
import { About } from "./Pages/About/about"
import { Checkout } from "./Pages/Checkout/checkout"
import { Register } from "./Pages/Register/register"
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
