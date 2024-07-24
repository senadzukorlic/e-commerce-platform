import { useContext, useState } from "react"
import { DataContext } from "../../../Context/CreateContext"
import Box from "@mui/material/Box"
import DeleteIcon from "@mui/icons-material/Delete"
import FavoriteIcon from "@mui/icons-material/Favorite"

// import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded"

import {
  EmptyItemCard,
  HeartIcon,
  H1,
  StyledItemCard,
  CardContentImageStyled,
  Image,
  CardContentTitleStyled,
  TitleAndIconDiv,
  TitleDiv,
  IconDiv1,
  DeleteButton,
  ItemInfoDiv,
  PDiv,
  IconDiv,
  HeartButton,
  QuantityDiv,
  Select,
  MenuItemStyled,
} from "./ItemCardStyled"

export function ItemCard() {
  const { cartData, setCartData, setTotal, setCartCount } =
    useContext(DataContext)

  const [favoriteItems, setFavoriteItems] = useState([])

  const handleQuantityChange = (itemId) => (event) => {
    setQuantities({
      ...quantities,
      [itemId]: event.target.value,
    })
  }
  const [quantities, setQuantities] = useState(
    cartData.reduce((acc, item) => {
      acc[item.id] = 1
      return acc
    }, {})
  )
  const deleteItem = (item) => {
    setCartData((currentItem) => {
      const updatedItems = currentItem.filter(
        (cartItem) => cartItem.id !== item.id
      )
      const total = updatedItems.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.price
      }, 0)
      setTotal(total)
      setCartCount((currentValue) => currentValue - 1)
      return updatedItems
    })
  }

  const setFavorite = (item) => {
    setFavoriteItems((oldItems) => {
      if (oldItems.includes(item.id)) {
        return oldItems.filter((id) => id !== item.id)
      } else {
        return [...oldItems, item.id]
      }
    })
  }

  return (
    <>
      {cartData.length === 0 ? (
        <EmptyItemCard>
          <H1>Your Shopping Bag is empty!</H1>
        </EmptyItemCard>
      ) : (
        cartData.map((item) => (
          <StyledItemCard key={item.id} variant="outlined">
            <CardContentImageStyled>
              <Box>
                <Image component="img" image={item.images[0]} />
              </Box>
            </CardContentImageStyled>
            <CardContentTitleStyled>
              <TitleAndIconDiv>
                <TitleDiv gutterBottom variant="p">
                  {item.title}
                  <br />
                  {item.price}€
                </TitleDiv>
                <IconDiv1>
                  <DeleteButton onClick={() => deleteItem(item)}>
                    <DeleteIcon />
                  </DeleteButton>
                </IconDiv1>
              </TitleAndIconDiv>
              <ItemInfoDiv>
                <PDiv>
                  <p>Art.No.</p>
                  <p>Colour:</p>
                </PDiv>
                <PDiv>
                  <p style={{ fontWeight: "bolder" }}>{item.sku}</p>
                  <p style={{ fontWeight: "bolder" }}>White</p>
                </PDiv>
                <PDiv>
                  <p>Size:</p>
                  <p>Total:</p>
                </PDiv>
                <PDiv>
                  <p style={{ fontWeight: "bolder" }}>{item.size}</p>
                  <p style={{ fontWeight: "bolder" }}>{item.price}</p>
                </PDiv>
              </ItemInfoDiv>
              <IconDiv>
                <HeartButton onClick={() => setFavorite(item)}>
                  {!favoriteItems.includes(item.id) ? (
                    <HeartIcon
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="heart"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ color: "red" }}
                    >
                      <path
                        fill="#ff0000"
                        d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                      ></path>
                    </HeartIcon>
                  ) : (
                    <FavoriteIcon style={{ color: "red" }} />
                  )}
                </HeartButton>
                <QuantityDiv>
                  <Select
                    value={quantities[item.id]}
                    onChange={handleQuantityChange(item.id)}
                  >
                    {[...Array(10).keys()].map((number) => (
                      <MenuItemStyled key={number + 1} value={number + 1}>
                        {number + 1}
                      </MenuItemStyled>
                    ))}
                  </Select>
                </QuantityDiv>
              </IconDiv>
            </CardContentTitleStyled>
          </StyledItemCard>
        ))
      )}
    </>
  )
}
