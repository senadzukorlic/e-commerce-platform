import { useContext } from "react"
import { DataContext } from "../../Context/CreateContext"
import { Typography, Button, CardActionArea } from "@mui/material"
import {
  ParentDiv,
  Imagee,
  CardText,
  ButtonCard,
  HeartButton,
  ImageWrapper,
  ButtonHeArT,
  StyledCard,
} from "./ProductCardStyles"

export function ProductData({ categories }) {
  const { data, inputValue, setCartCount, setCartData } =
    useContext(DataContext)

  const handleAddToCart = (item) => {
    setCartData((prevCartData) => {
      const isItemInCart = prevCartData.some(
        (cartItem) => cartItem.id === item.id
      )
      if (isItemInCart) {
        return prevCartData // ako je stavka već u korpi, ne dodaj ništa
      }
      console.log("Adding item to cart:", item)
      setCartCount((currentValue) => currentValue + 1) // ažuriraj broj stavki u korpi

      return [...prevCartData, item] // dodaj novu stavku u korpu
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
                <CardActionArea>
                  <ImageWrapper>
                    <Imagee image={item.images[0]} alt={item.title} />
                    <HeartButton>
                      <ButtonHeArT />
                    </HeartButton>
                  </ImageWrapper>

                  <CardText>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price}€
                    </Typography>
                  </CardText>
                  <HeartButton />
                </CardActionArea>
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
