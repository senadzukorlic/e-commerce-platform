import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "./Components/NavBar"

import Home from "./Pages/Home"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import Sport from "./Pages/Sport"
import Electronics from "./Pages/Electronics"
import ForgotPassword from "./Pages/ForgotPassword"

import { ShoppingCart } from "./Pages/ShoppingCart"
import { ProductDetailPage } from "./Pages/ProductDetailPage"
import { Favorite } from "./Pages/Favorite"
import { About } from "./Pages/About"
import { Checkout } from "./Pages/Checkout"
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
      </Routes>
    </>
  )
}

export default App
