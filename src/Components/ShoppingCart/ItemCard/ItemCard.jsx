import { useContext, useState } from "react"
import { DataContext } from "../../../Context/CreateContext"
import Box from "@mui/material/Box"
import DeleteIcon from "@mui/icons-material/Delete"
import FavoriteIcon from "@mui/icons-material/Favorite"

import {
  EmptyItemCard,
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
                  {item.title} <br />
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
                  <p>{item.sku}</p>
                  <p>White</p>
                </PDiv>
                <PDiv>
                  <p>Size:</p>
                  <p>Total:</p>
                </PDiv>
                <PDiv>
                  <p>{item.size}</p>
                  <p>{item.price}</p>
                </PDiv>
              </ItemInfoDiv>
              <IconDiv>
                <HeartButton>
                  <FavoriteIcon />
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
