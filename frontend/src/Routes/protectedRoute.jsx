import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../Hooks/useAuth"
import Loader from "../Styles/loader"

export function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate, loading])

  if (loading) {
    return <Loader size={70} />
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}
