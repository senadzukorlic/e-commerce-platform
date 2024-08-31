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
import { addToCart } from "../../Hooks/addToCart"

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
                onClick={() =>
                  addToCart({
                    item: items,
                    setCartCount,
                    setCartData,
                    setTotal,
                    size: selectedSizes[items.id] || "",
                  })
                }
                width={{ width: "100%" }}
              />
            </ItemActions>
          </ItemCard>
        ))}
      </ItemsContainer>
    </FavoriteContainer>
  )
}
