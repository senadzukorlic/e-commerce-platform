import * as React from "react"
import Box from "@mui/material/Box"
import { DataContext } from "../../Context/CreateContext"
import { useContext, useState } from "react"
import {
  StyledItemCard,
  Image,
  ParentDiv,
  TitleDiv,
  // StyledCheckoutCard,
  StyledItemCardDiv,
  CardContentImageStyled,
  CardContentTitleStyled,
  ItemInfoDiv,
  PDiv,
  IconDiv,
  HeartButton,
  HeartIcon,
  Select,
  QuantityDiv,
  MenuItemStyled,
  IconDiv1,
  TitleAndIconDiv,
  DeleteButton,
  CartandCheckoutDiv,
  TitleParentDiv,
  H1,
  P,
} from "./ShoppingCartStyled"

import {
  StyledCheckoutCard,
  SignInButton,
  LineDiv1,
  P1,
  P2,
  LineDiv2,
  H3,
  CheckoutButton,
} from "./CheckoutDivStyled"

import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton } from "@mui/material"

export function ShoppingCart() {
  const { cartData, setCartData } = useContext(DataContext)
  const [quantities, setQuantities] = useState(
    cartData.reduce((acc, item) => {
      acc[item.id] = 1
      return acc
    }, {})
  )

  const handleQuantityChange = (itemId) => (event) => {
    setQuantities({
      ...quantities,
      [itemId]: event.target.value,
    })
  }

  const deleteItem = (item) => {
    setCartData((currentItem) => {
      const updatedItems = currentItem.filter(
        (cartItem) => cartItem.id !== item.id
      )
      return updatedItems
    })
  }

  return (
    <ParentDiv>
      <TitleParentDiv>
        <P>Members get free delivery over £30 and free returns.</P>
        <H1>Shopping bag</H1>
      </TitleParentDiv>

      <CartandCheckoutDiv>
        <StyledItemCardDiv>
          {cartData.map((item) => (
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
                    <p>XS</p>
                    <p>{item.price}</p>
                  </PDiv>
                </ItemInfoDiv>
                <IconDiv>
                  {/* <CardActionArea sx={{ width: 50, height: 40 }}> */}
                  <HeartButton>
                    <HeartIcon />
                  </HeartButton>
                  {/* </CardActionArea> */}
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
          ))}
        </StyledItemCardDiv>
        <StyledCheckoutCard>
          <P1>Log in to use your personal offers!</P1>
          <SignInButton>Sign in</SignInButton>
          <br />
          <br />
          <LineDiv1></LineDiv1>
          <br />
          <P2>Order value </P2>
          <P2>Discount </P2>
          <P2>Delivery</P2>
          <br />
          <LineDiv2></LineDiv2>
          <H3>Total</H3>
          <br />
          <br />
          <CheckoutButton>Continue to checkout</CheckoutButton>
          <P2>
            Prices and delivery costs are not confirmed until you've reached the
            checkout.
          </P2>
        </StyledCheckoutCard>
      </CartandCheckoutDiv>
    </ParentDiv>
  )
}
