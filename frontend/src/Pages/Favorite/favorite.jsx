import React, { useState } from "react"
import { useDataContext } from "../../Hooks/useContext"
import { BlackButton } from "../../Components/BlackButton/blackButton"
import { getSizeOptions } from "../../Hooks/optionsSwitch"
import {
  FavoriteContainer,
  ItemsContainer,
  ItemCard,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemPrice,
  ItemActions,
} from "./styleFavorite"
import SelectInput from "../../Components/SelectInput/selectInput"
import { addToCart } from "../../Hooks/addToCart"
import { EmptyComponent } from "../../Components/Empty/empty"
import { PageTitle } from "../../Components/PageTitle/pageTitle"

export function Favorite() {
  const { favoriteItems, setCartData, setCartCount, setTotal } =
    useDataContext()

  const [selectedSizes, setSelectedSizes] = useState({})

  const handleSizeChange = (itemId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [itemId]: size,
    }))
  }

  return (
    <>
      {favoriteItems.length === 0 ? (
        <>
          <PageTitle title="Favorite" />
          <EmptyComponent text="Favorite page is empty!" />
        </>
      ) : (
        <FavoriteContainer>
          <PageTitle title="Favorite" />
          <ItemsContainer>
            {favoriteItems.map((item) => {
              const sizeOptions = getSizeOptions(item.category)
              // Dodajte "Select size" kao prvu opciju
              const optionsWithDefault = ["Select size", ...sizeOptions]

              return (
                <ItemCard key={item.id}>
                  <ItemImage src={item.images[0]} />
                  <ItemInfo>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemPrice>{item.price}</ItemPrice>
                  </ItemInfo>
                  <ItemActions>
                    <SelectInput
                      options={optionsWithDefault}
                      value={selectedSizes[item.id] || "Select size"}
                      onChange={(e) =>
                        handleSizeChange(item.id, e.target.value)
                      }
                    />
                    <BlackButton
                      buttonName="Add to bag"
                      onClick={() =>
                        addToCart({
                          item,
                          setCartCount,
                          setCartData,
                          setTotal,
                          size: selectedSizes[item.id] || "",
                        })
                      }
                      width={{ width: "100%" }}
                    />
                  </ItemActions>
                </ItemCard>
              )
            })}
          </ItemsContainer>
        </FavoriteContainer>
      )}
    </>
  )
}
