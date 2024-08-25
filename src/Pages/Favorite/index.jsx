import React from "react"
import { useDataContext } from "../../Hooks/useContext"
import { BlackButton } from "../../Components/BlackButton"
import { selectSizeFavorite } from "../../Config/size"
import {
  FavoriteContainer,
  FavoriteTitle,
  ItemsContainer,
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  ItemActions,
} from "./style"
import SelectInput from "../../Components/SelectInput"

export function Favorite() {
  const { favoriteItems, setCartData, setCartCount, setTotal } =
    useDataContext()
  const [selectedSizes, setSelectedSizes] = React.useState({})

  const handleSizeChange = (id, value) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [id]: value,
    }))
  }

  const handleAddToCart = (item) => {
    const selectedSize = selectedSizes[item.id]

    const itemWithSize = { ...item, size: selectedSize }

    setCartData((prevCartData) => {
      const updatedCartData = [...prevCartData, itemWithSize]

      setCartCount((currentValue) => currentValue + 1)

      const total = updatedCartData.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.price
      }, 0)

      setTotal(total)

      return updatedCartData
    })
  }

  const addItemToBag = (item) => {
    handleAddToCart(item)
  }

  return (
    <FavoriteContainer>
      <FavoriteTitle>Favorites</FavoriteTitle>
      <ItemsContainer>
        {favoriteItems.map((items) => (
          <ItemCard key={items.id}>
            <ItemImage src={items.images[0]} />
            <ItemInfo>
              <ItemTitle>{items.title}</ItemTitle>
              <ItemPrice>{items.price}</ItemPrice>
            </ItemInfo>
            <ItemActions>
              <SelectInput
                options={selectSizeFavorite}
                value={selectedSizes[items.id] || ""}
                onChange={(e) => handleSizeChange(items.id, e.target.value)}
              />
              <BlackButton
                buttonName="Add to bag"
                onClick={() => addItemToBag(items)}
                width={{ width: "100%" }}
              />
            </ItemActions>
          </ItemCard>
        ))}
      </ItemsContainer>
    </FavoriteContainer>
  )
}
