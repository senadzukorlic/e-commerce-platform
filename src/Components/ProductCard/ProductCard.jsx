import { useContext, useState } from "react"
import { DataContext } from "../../Context/CreateContext"
import { Typography, Button, CardActionArea, CardContent } from "@mui/material"
import {
  ParentDiv,
  Imagee,
  CardText,
  ButtonCard,
  HeartButton,
  ImageWrapper,
  ButtonHeArT,
  StyledCard,
  IconButtonHeart,
} from "./ProductCardStyles"

export function ProductData({ categories }) {
  const { data, inputValue, setCartCount, setCartData, setTotal } =
    useContext(DataContext)

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
      {data
        .filter((item) => categories.includes(item.category.toLowerCase()))
        .map((item) => {
          if (
            !inputValue ||
            item.title.toLowerCase().includes(inputValue.toLowerCase())
          ) {
            return (
              <StyledCard key={item.id}>
                <CardContent>
                  <ImageWrapper>
                    <Imagee image={item.images[0]} alt={item.title} />
                    <IconButtonHeart>
                      <ButtonHeArT />
                    </IconButtonHeart>
                  </ImageWrapper>

                  <CardText>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price}€
                    </Typography>
                  </CardText>
                </CardContent>
                <ButtonCard>
                  <Button size="Medium" color="inherit">
                    Buy
                  </Button>
                  <Button
                    size="medium"
                    color="inherit"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Card
                  </Button>
                </ButtonCard>
              </StyledCard>
            )
          }
          return null
        })}
    </ParentDiv>
  )
}
