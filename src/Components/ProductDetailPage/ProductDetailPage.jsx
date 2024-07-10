import { useContext, useState } from "react"
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

  const handleSizeChange = (event) => {
    setSize(event.target.value)
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

      return updatedCartData
    })
  }

  return (
    <ParentDiv>
      {productDetail ? (
        <CardProductDetail>
          <CardContentImageStyled>
            <Image
              component="img"
              height="140"
              image={item.images[0]}
              alt={item.title}
            />
          </CardContentImageStyled>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {item.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {item.price}€
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h5" sx={{ fontFamily: "Roboto" }}>
                Select size
              </Typography>
              <ButtonSize variant="outlined">XS </ButtonSize>
              <ButtonSize variant="outlined">S </ButtonSize>
              <ButtonSize variant="outlined">M </ButtonSize>
              <ButtonSize variant="outlined">L </ButtonSize>
              <ButtonSize variant="outlined">XL </ButtonSize>
              <ButtonSize variant="outlined">XLL </ButtonSize>

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
        <h1>NEma nista</h1>
      )}
    </ParentDiv>
  )
}
