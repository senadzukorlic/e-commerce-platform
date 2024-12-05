import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { PageTitle } from "../../Components/PageTitle/pageTitle"
import { Typography, CardActionArea } from "@mui/material"
import {
  ParentDiv,
  Imagee,
  CardText,
  ImageWrapper,
  StyledCard,
  ButtonDiv,
} from "./myProductsStyle"
import { BlackButton } from "../../Components/blackButton/blackButton"
import { OutlinedButton } from "../../Components/OutlinedButton/outlinedButton"
import { useDataContext } from "../../Hooks/useContext"

export function MyProducts() {
  const [error, setError] = useState(null)
  const { setCartCount, setOwnProductsTotal, setOwnProducts, ownProducts } =
    useDataContext()

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
      setOwnProducts(response.data.products)
      setError(null)
    } catch (error) {
      setError("Failed to fetch products.")
      console.error("Fetch error:", error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem("token")

      await axios.delete(
        `http://localhost:8080/admin/my-products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      await fetchProducts()
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete product.")
    }
  }

  const navigate = useNavigate()

  const handleEdit = (product) => {
    navigate("/update-your-own-product", {
      state: { product },
    })
  }

  const handleAddToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.post(
        `http://localhost:8080/admin/my-products/${productId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      const addedProduct = ownProducts.find(
        (product) => product.id === productId
      )

      // Update total price by adding the current product's price
      setOwnProductsTotal((currentTotal) => {
        // If currentTotal is undefined or NaN, start from 0
        const parsedCurrentTotal = currentTotal || 0
        const productPrice = parseFloat(addedProduct.price)
        return parsedCurrentTotal + productPrice
      })
      setCartCount((count) => {
        return count + 1
      })
    } catch (error) {
      console.log(`Nije dobro nesto`, error)
    }
  }

  return (
    <div>
      <PageTitle title="My products" />
      <ParentDiv>
        {ownProducts.map((item) => (
          <StyledCard key={item.id}>
            <CardActionArea style={{ height: "700px" }}>
              <ImageWrapper>
                <Imagee image={item.imageUrl} />
              </ImageWrapper>

              <CardText>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {item.price}€
                </Typography>
              </CardText>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ButtonDiv>
                  <BlackButton
                    buttonName="Edit"
                    width={{ width: "80px" }}
                    onClick={() => handleEdit(item)}
                  />
                  <BlackButton
                    buttonName="Delete"
                    width={{ width: "80px" }}
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this product?"
                        )
                      ) {
                        handleDelete(item.id)
                      }
                    }}
                  />
                </ButtonDiv>
                <OutlinedButton
                  buttonName="Add to cart"
                  width={{ width: "190px" }}
                  onClick={() => handleAddToCart(item.id)}
                />
              </div>
            </CardActionArea>
          </StyledCard>
        ))}
      </ParentDiv>
    </div>
  )
}
