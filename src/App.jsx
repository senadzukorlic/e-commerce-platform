import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"

import Home from "./Components/Home/Home"

import Men from "./Pages/Men/Men"

import Women from "./Pages/Women/Women"

import Sport from "./Pages/Sport/Sport"

import Electronics from "./Pages/Electronics/Electronics"

import { createGlobalStyle } from "styled-components"

import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart"
import { ProductDetailPage } from "./Components/ProductDetailPage/ProductDetailPage"
import { Favorite } from "./Components/Favorite/Favorite"

const GlobalStyles = createGlobalStyle`
  html,body {
  
    margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
 
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

        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product-detail-page" element={<ProductDetailPage />} />

        <Route path="/sport" element={<Sport />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  )
}

export default App
