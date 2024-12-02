import * as React from "react"
import {
  ParentDiv,
  StyledItemCardDiv,
  ItemAndCheckoutDiv,
  TitleParentDiv,
} from "./styleShoppingCart"
import { EmptyComponent } from "../../Components/empty/empty"
import { useDataContext } from "../../Hooks/useContext"
import { ItemCard } from "./itemCard"
import { CheckoutCard } from "./checkoutCard"
import { PageTitle } from "../../Components/PageTitle/pageTitle"
import axios from "axios"
import { useState, useEffect } from "react"

export function ShoppingCart() {
  const { cartData } = useDataContext()

  const [ownProducts, setOwnProducts] = useState([])

  // Dodajte useEffect za fetch
  useEffect(() => {
    const handleFetchOwnProducts = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get(
          "http://localhost:8080/admin/my-products",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        setOwnProducts(response.data.products)
      } catch (error) {
        console.log("Nesto nije dobro", error)
      }
    }

    handleFetchOwnProducts()
  }, [])
  return (
    <>
      <PageTitle title="Shopping Cart" />
      {cartData.length === 0 && ownProducts.length === 0 ? (
        <EmptyComponent text="Your Shopping Cart is empty!" />
      ) : (
        <ParentDiv>
          <TitleParentDiv></TitleParentDiv>

          <ItemAndCheckoutDiv>
            <StyledItemCardDiv>
              <ItemCard ownProducts={ownProducts} />
            </StyledItemCardDiv>
            <CheckoutCard />
          </ItemAndCheckoutDiv>
        </ParentDiv>
      )}
    </>
  )
}
