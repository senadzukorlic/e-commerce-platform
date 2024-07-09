import { useContext, useState } from "react"
import { DataContext } from "../../../Context/CreateContext"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  MenuItem,
  Select,
} from "@mui/material"

export function ProductDetailPage() {
  const { productDetail, setCartData, setCartCount, setTotal } =
    useContext(DataContext)

  const item = productDetail[0]

  const [size, setSize] = useState("")

  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }

  if (!productDetail || productDetail.length === 0) {
    return (
      <Typography variant="h6" color="text.secondary">
        Proizvod nije pronađen
      </Typography>
    )
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
    <>
      {productDetail ? (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.images[0]}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price}€
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Select
                value={size}
                onChange={handleSizeChange}
                displayEmpty
                fullWidth
              >
                <MenuItem value="" disabled>
                  Odaberi veličinu
                </MenuItem>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"XL"}>XL</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleAddToCart(item)}
              >
                Dodaj u korpu
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <h1>NEma nista</h1>
      )}
    </>
  )
}
