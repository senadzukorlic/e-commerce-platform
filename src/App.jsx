import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"

import Home from "./Components/Home/Home"

import Men from "./Components/Categories/Men/Men"
import Shirts from "./Components/Categories/Men/Shirts"
import Shoes from "./Components/Categories/Men/Shoes"
import Watches from "./Components/Categories/Men/Watches"

import Women from "./Pages/Women/Women"

import Sport from "./Components/Categories/Sport/Sport"

import Electronics from "./Components/Categories/Electronics/Electronics"
import Laptops from "./Components/Categories/Electronics/Laptops"
import Smartphones from "./Components/Categories/Electronics/Smartphones"
import Tablets from "./Components/Categories/Electronics/Tablets"
import MobileAccessories from "./Components/Categories/Electronics/MobileAccessories"

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
        <Route path="/mens-shirts" element={<Shirts />} />
        <Route path="/mens-shoes" element={<Shoes />} />
        <Route path="/mens-watches" element={<Watches />} />

        <Route path="/women" element={<Women />} />

        <Route path="/electronics" element={<Electronics />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/mobile-accessories" element={<MobileAccessories />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/product-detail-page" element={<ProductDetailPage />} />

        <Route path="/sport" element={<Sport />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  )
}

export default App
