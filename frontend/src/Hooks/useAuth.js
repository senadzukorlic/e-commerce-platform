import { useState, useEffect } from "react"

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true) // Dodajemo stanje koje sluzi za kao loader,tj koristicemo loading state dok browser ne proveri u local storage da li ima valjanog tokena.Dok browser vrsi proveru,loading ce biti true(na osnvou toga cemo pirkazati Loading tekst ili loader cycle).Ako ne bismo to uradili desila bi se situacija da prilikom ucitavanja komponente browser automatski proveti da li je state isauthetnticated true(inace varijabla koja vraca boolean na osnovu tokena),a posto je isAuthenticated po defaultu false,ne bi smo dobili render tih stranica.ZBog toga loading state ima jako vaznu ulogu.

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsAuthenticated(!!token) //!! vraca bolean,sto znaci ako je token prisutan bice true
    setLoading(false) // Završavamo proveru autentifikacije
  }, [])

  return { isAuthenticated, loading }
}
