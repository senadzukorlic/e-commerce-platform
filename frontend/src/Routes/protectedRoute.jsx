// import { useEffect } from "react"
// import { Navigate, useNavigate } from "react-router-dom"
// import { useAuth } from "../Hooks/useAuth"

// export function ProtectedRoute({ children }) {
//   const { isAuthenticated, checkAuth } = useAuth()
//   const navigate = useNavigate()

//   useEffect(() => {
//     // Proveravamo autentifikaciju pri svakoj promeni rute
//     if (!checkAuth()) {
//       navigate("/")
//     }
//   }, [checkAuth, navigate, window.location.pathname])
//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />
//   }
//   return children
// }

import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"

export function ProtectedRoute({ children }) {
  const { isAuthenticated, checkAuth, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!checkAuth()) {
      navigate("/")
    }
  }, [checkAuth, navigate, window.location.pathname])

  // Ako je provera u toku, ne renderujemo ništa
  if (loading) {
    return <div>Loading...</div> // Možete dodati i spinner za bolji UI/UX
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}
