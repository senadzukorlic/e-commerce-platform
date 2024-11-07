// import { useState, useEffect } from "react"

// export const useAuth = () => {
//   //funckija koja se koristi za autentifikaciju korisnika
//   const [isAuthenticated, setIsAuthenticated] = useState(false)

//   useEffect(() => {
//     //useEffect hook koji se koristi za proveru da li je korisnik autentifikovan samo prilikom prvog ucitavanja stranice
//     const token = localStorage.getItem("token")
//     setIsAuthenticated(!!token) //koristimo izraz "!!token" kojim cemo vrednost tokena pretvoriti u boolean vrednost,pa ako token postoji,onda je varijabla isAuthenticated true,kojom kasnije vrsimo autorizaciju korisnika.
//     if (!token && window.location.pathname !== "/") {
//       window.location.pathname = "/"
//     } //logika za preusmeravanje ako korisnik nije autentifikovan
//   }, [])

//   const logout = () => {
//     //funkcija koja se koristi za odjavu korisnika,zapravno njome brisemo token iz localStorage i postavljamo isAuthenticated na false
//     localStorage.removeItem("token")
//     setIsAuthenticated(false)
//   }
//   return { isAuthenticated, logout }
// }

import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  // Izdvajamo logiku provere autentifikacije u zasebnu funkciju
  const checkAuth = useCallback(() => {
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token)
    return !!token
  }, [])

  useEffect(() => {
    // Inicijalna provera
    const isAuth = checkAuth()
    if (!isAuth && window.location.pathname !== "/") {
      navigate("/")
    }
  }, [checkAuth, navigate])

  const logout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
    navigate("/") // Dodajemo direktno preusmeravanje nakon odjave
  }

  return { isAuthenticated, logout, checkAuth }
}
