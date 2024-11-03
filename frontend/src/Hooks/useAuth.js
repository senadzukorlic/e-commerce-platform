import { useState, useEffect } from "react"

export const useAuth = () => {
  //funckija koja se koristi za autentifikaciju korisnika
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    //useEffect hook koji se koristi za proveru da li je korisnik autentifikovan samo prilikom prvog ucitavanja stranice
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token) //koristimo izraz "!!token" kojim cemo vrednost tokena pretvoriti u boolean vrednost,pa ako token postoji,onda je varijabla isAuthenticated true,kojom kasnije vrsimo autorizaciju korisnika.
  }, [])

  const logout = () => {
    //funkcija koja se koristi za odjavu korisnika,zapravno njome brisemo token iz localStorage i postavljamo isAuthenticated na false
    localStorage.removeItem("token")
    setIsAuthenticated(false)
  }
  return { isAuthenticated, logout }
}
