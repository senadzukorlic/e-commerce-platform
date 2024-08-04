import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"

import Home from "./Pages/Home/Home"
import Men from "./Pages/Men/Men"
import Women from "./Pages/Women/Women"
import Sport from "./Pages/Sport/Sport"
import Electronics from "./Pages/Electronics/Electronics"

import { ShoppingCart } from "./Pages/ShoppingCart/ShoppingCart"
import { ProductDetailPage } from "./Pages/ProductDetailPage/ProductDetailPage"
import { Favorite } from "./Pages/Favorite/Favorite"
import { createGlobalStyle } from "styled-components"
import { LogIn } from "./Components/SignIn"

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
      </Routes>
    </>
  )
}

export default App
