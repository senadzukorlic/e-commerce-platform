// import { Route, Navigate, useNavigate, Routes } from "react-router-dom"
// import NavBar from "./Components/NavBar/navBar"
// import { useEffect } from "react"
// import Home from "./Pages/Home/home"
// import Men from "./Pages/Men/men"
// import Women from "./Pages/Women/women"
// import Sport from "./Pages/Sport/sport"
// import Electronics from "./Pages/Electronics/electronics"
// import ForgotPassword from "./Pages/ForgotPassword/forgotPassword"
// import { useAuth } from "./Hooks/useAuth"
// import { ShoppingCart } from "./Pages/ShoppingCart/shoppingCart"
// import { ProductDetailPage } from "./Pages/ProductDetailPage/productDetail"
// import { Favorite } from "./Pages/Favorite/favorite"
// import { About } from "./Pages/About/about"
// import { Checkout } from "./Pages/Checkout/checkout"
// import { Register } from "./Pages/Register/register"
// import { createGlobalStyle } from "styled-components"

// const GlobalStyles = createGlobalStyle`
//   html,body {

//     margin: 0;
//   padding: 0;
//   width: 100%;
//   overflow-x: hidden;
//  font-family: "Roboto";
// }
// `

// function App() {
//   const { isAuthenticated } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     // Preusmeri korisnika na početnu stranicu ako nije autentifikovan
//     if (!isAuthenticated) {
//       navigate("/")
//     }
//   }, [isAuthenticated, navigate])
//   return (
//     <>
//       <GlobalStyles />
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {isAuthenticated ? (
//           <>
//             <Route path="/men" element={<Men />} />
//             <Route path="/women" element={<Women />} />
//             <Route path="/electronics" element={<Electronics />} />
//             <Route path="/sport" element={<Sport />} />
//             <Route path="/shopping-cart" element={<ShoppingCart />} />
//             <Route
//               path="/product-detail-page"
//               element={<ProductDetailPage />}
//             />
//             <Route path="/favorite" element={<Favorite />} />
//             <Route path="forgot-password" element={<ForgotPassword />} />
//             <Route path="/about-us" element={<About />} />
//             <Route path="/checkout" element={<Checkout />} />
//             <Route path="/signup" element={<Register />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/" replace />} />
//         )}
//       </Routes>
//     </>
//   )
// }

// export default App

import NavBar from "./Components/NavBar/navBar"
import { useEffect } from "react"
import Home from "./Pages/Home/home"
import Men from "./Pages/Men/men"
import Women from "./Pages/Women/women"
import Sport from "./Pages/Sport/sport"
import Electronics from "./Pages/Electronics/electronics"
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword"
import { useAuth } from "./Hooks/useAuth"
import { ShoppingCart } from "./Pages/ShoppingCart/shoppingCart"
import { ProductDetailPage } from "./Pages/ProductDetailPage/productDetail"
import { Favorite } from "./Pages/Favorite/favorite"
import { About } from "./Pages/About/about"
import { Checkout } from "./Pages/Checkout/checkout"
import { Register } from "./Pages/Register/register"
import { createGlobalStyle } from "styled-components"
import { RoutesComponent } from "./Routes/routes"

// ... ostali importi
const GlobalStyles = createGlobalStyle`
  html,body {

    margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
 font-family: "Roboto";
}`
function App() {
  // const { isAuthenticated, checkAuth } = useAuth()
  // const navigate = useNavigate()

  // useEffect(() => {
  //   // Proveravamo autentifikaciju pri svakoj promeni rute
  //   if (!checkAuth()) {
  //     navigate("/")
  //   }
  // }, [checkAuth, navigate, window.location.pathname])

  // // Komponenta za zaštićene rute
  // const ProtectedRoute = ({ children }) => {
  //   if (!isAuthenticated) {
  //     return <Navigate to="/" replace />
  //   }
  //   return children
  // }

  return (
    <>
      <GlobalStyles />
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
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
          path="/about-us"
          element={
            <ProtectedRoute>
              <About />
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
      </Routes> */}
      <RoutesComponent />
    </>
  )
}

export default App
