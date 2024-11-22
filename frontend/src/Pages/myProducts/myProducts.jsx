import React, { useState, useEffect } from "react"
import axios from "axios"

export function MyProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get(
          "http://localhost:8080/admin/my-products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        setProducts(response.data.products)
      } catch (error) {
        setError("Failed to fetch products.")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h1>My Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Size: {product.size}</p>
            <img src={product.imageUrl} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}
