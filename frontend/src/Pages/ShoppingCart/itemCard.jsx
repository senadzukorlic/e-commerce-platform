import { useState, useEffect } from "react"
import { useDataContext } from "../../Hooks/useContext"
import Box from "@mui/material/Box"
import DeleteIcon from "@mui/icons-material/Delete"
import FilledHeartIcon from "../../Styles/filledHeartIcon"
import OutlinedHeartIcon from "../../Styles/outlinedHeartIcon"
import FavoriteButton from "../../Components/favoriteButton/favoriteButton"

import {
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
  QuantityDiv,
  Select,
  MenuItemStyled,
} from "./itemCardStyle"

export function ItemCard({
  ownCartProducts,
  handleDeleteOwnProduct,
  productQuantityAndTotalPrice,
  updateQuantity,
}) {
  const {
    cartData,
    setCartData,
    setTotal,
    setCartCount,
    favoriteItems,
    setFavoriteItems,
  } = useDataContext()
  const [favoriteButton, setFavoriteButton] = useState([])

  useEffect(() => {
    const initialFavoriteButtons = cartData
      .filter((item) =>
        favoriteItems.some(
          (favItem) => favItem.id === item.id && favItem.size === item.size
        )
      )
      .map((item) => `${item.id}-${item.size}`)

    setFavoriteButton(initialFavoriteButtons)
  }, [cartData, favoriteItems])

  const handleQuantityChange = (itemId, itemSize) => (event) => {
    const newQuantity = event.target.value
    setQuantities((prevQuantities) => {
      const updatedQuantities = {
        ...prevQuantities,
        [`${itemId}-${itemSize}`]: newQuantity,
      }
      const newTotal = cartData.reduce((acc, item) => {
        return acc + item.price * updatedQuantities[`${item.id}-${item.size}`]
      }, 0)
      setTotal(newTotal)

      return updatedQuantities
    })
  }

  const [quantities, setQuantities] = useState(
    cartData.reduce((acc, item) => {
      acc[`${item.id}-${item.size}`] = 1
      return acc
    }, {})
  )

  const deleteItem = (item) => {
    setCartData((currentItem) => {
      const updatedItems = currentItem.filter(
        (cartItem) => !(cartItem.id === item.id && cartItem.size === item.size)
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
              <FavoriteButton
                item={item}
                favoriteItems={favoriteItems}
                setFavoriteItems={setFavoriteItems}
                FilledIcon={FilledHeartIcon}
                OutlinedIcon={OutlinedHeartIcon}
              />
              <QuantityDiv>
                <Select
                  value={quantities[`${item.id}-${item.size}`]}
                  onChange={handleQuantityChange(item.id, item.size)}
                >
                  {[...Array(10).keys()].map((number) => (
                    <MenuItemStyled
                      key={`quantity-${number + 1}`}
                      value={number + 1}
                    >
                      {number + 1}
                    </MenuItemStyled>
                  ))}
                </Select>
              </QuantityDiv>
            </IconDiv>
          </CardContentTitleStyled>
        </StyledItemCard>
      ))}

      {ownCartProducts.length > 0 &&
        ownCartProducts.map((item) => {
          const productData = productQuantityAndTotalPrice.find(
            (p) => p.productId === item.id
          )
          const quantity = productData ? productData.quantity : 1
          const totalPrice = productData ? productData.totalPrice : item.price

          return (
            <StyledItemCard key={item.id} variant="outlined">
              <CardContentImageStyled>
                <Box>
                  <Image component="img" image={item.imageUrl} />
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
                    <DeleteButton
                      onClick={() => handleDeleteOwnProduct(item.id)}
                    >
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
                    <p style={{ fontWeight: "bolder" }}>6RJDTVCU</p>
                    <p style={{ fontWeight: "bolder" }}>White</p>
                  </PDiv>
                  <PDiv>
                    <p>Size:</p>
                    <p>Total:</p>
                  </PDiv>
                  <PDiv>
                    <p style={{ fontWeight: "bolder" }}>{item.size}</p>
                    <p style={{ fontWeight: "bolder" }}>{totalPrice}</p>
                  </PDiv>
                </ItemInfoDiv>
                <IconDiv>
                  <FavoriteButton
                    item={item}
                    favoriteItems={favoriteItems}
                    setFavoriteItems={setFavoriteItems}
                    FilledIcon={FilledHeartIcon}
                    OutlinedIcon={OutlinedHeartIcon}
                  />
                  <QuantityDiv>
                    <Select
                      value={quantity}
                      onChange={(event) => {
                        const newQuantity = event.target.value
                        updateQuantity(item.id, newQuantity) // Prosleđivanje nove vrednosti
                      }}
                    >
                      {[...Array(10).keys()].map((number) => (
                        <MenuItemStyled
                          key={`quantity-${number + 1}`}
                          value={number + 1}
                        >
                          {number + 1}
                        </MenuItemStyled>
                      ))}
                    </Select>
                  </QuantityDiv>
                </IconDiv>
              </CardContentTitleStyled>
            </StyledItemCard>
          )
        })}
    </>
  )
}
