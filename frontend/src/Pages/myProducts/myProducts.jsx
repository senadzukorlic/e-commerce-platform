import React, { useState, useEffect } from "react"
import axios from "axios"
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
      <PageTitle title="My products" />
      <ParentDiv>
        {products.map((item) => (
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
              <ButtonDiv>
                <BlackButton buttonName="Edit" width={{ width: "80px" }} />
                <OutlinedButton buttonName="Delete" width={{ width: "80px" }} />
              </ButtonDiv>
            </CardActionArea>
          </StyledCard>
        ))}
      </ParentDiv>
    </div>
  )
}
