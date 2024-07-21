import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../Context/CreateContext"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material"

import {
  CardProductDetail,
  ParentDiv,
  Image,
  CardContentImageStyled,
  ButtonSize,
} from "./ProductDetailPageStyle"

export function ProductDetailPage() {
  const { productDetail, setCartData, setCartCount, setTotal } =
    useContext(DataContext)

  const item = productDetail[0]

  const [size, setSize] = useState("")
  const [images, setImages] = useState([])
  const [prevNext, setPrexNext] = useState(0)

  useEffect(() => {
    if (productDetail.length > 0) {
      setImages(productDetail[0].images)
    }
  }, [productDetail])

  const productImages = () => {
    if (productDetail)
      setImages((currentImage) => {
        return [...currentImage, productDetail[0].images]
      })
  }

  const plus = () => {
    setPrexNext((current) => current + 1)
  }

  const minus = () => {
    setPrexNext((current) => current - 1)
  }
  const handleAddToCart = (item) => {
    setCartData((prevCartData) => {
      const isItemInCart = prevCartData.some(
        (cartItem) => cartItem.id === item.id
      )
      if (isItemInCart) {
        return prevCartData
      }
      const updatedCartData = [...prevCartData, item]

      setCartCount((currentValue) => currentValue + 1)

      const total = updatedCartData.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.price
      }, 0)

      setTotal(total)
      productImages()

      return updatedCartData
    })
  }

  return (
    <ParentDiv>
      {productDetail ? (
        <CardProductDetail>
          <CardContentImageStyled>
            <button
              onClick={minus}
              style={{
                width: "30px",
                height: "30px",
              }}
            >
              {"<"}
            </button>

            <Image
              component="img"
              height="140"
              image={images[prevNext]}
              alt={item.title}
            />
            <button
              onClick={plus}
              style={{
                width: "30px",
                height: "30px",
              }}
            >
              {">"}
            </button>
          </CardContentImageStyled>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {item.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {item.price}€
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography
                style={{ paddingBottom: "20px" }}
                variant="h5"
                sx={{ fontFamily: "Roboto" }}
              >
                Select size
              </Typography>
              <div style={{ paddingBottom: "20px" }}>
                <ButtonSize variant="outlined">XS</ButtonSize>
                <ButtonSize variant="outlined">S </ButtonSize>
                <ButtonSize variant="outlined">M </ButtonSize>
                <ButtonSize variant="outlined">L </ButtonSize>
                <ButtonSize variant="outlined">XL </ButtonSize>
                <ButtonSize variant="outlined">XLL </ButtonSize>
              </div>
              <Button
                variant="contained"
                sx={{ backgroundColor: "black", color: "white" }}
                fullWidth
                onClick={() => handleAddToCart(item)}
              >
                Add
              </Button>
            </Box>
          </CardContent>
        </CardProductDetail>
      ) : (
        <h1>Nema nista</h1>
      )}
    </ParentDiv>
  )
}
