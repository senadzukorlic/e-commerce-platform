import * as React from "react"
import {
  ParentDiv,
  StyledItemCardDiv,
  ItemAndCheckoutDiv,
  TitleParentDiv,
  H1,
  P,
} from "./styleShoppingCart"
import { EmptyComponent } from "../../Components/Empty/empty"
import { useDataContext } from "../../Hooks/useContext"
import { ItemCard } from "./itemCard"
import { CheckoutCard } from "./checkoutCard"
import { PageTitle } from "../../Components/PageTitle/pageTitle"

export function ShoppingCart() {
  const { cartData } = useDataContext()
  return (
    <>
      <PageTitle title="Shopping Cart" />
      {cartData.length === 0 ? (
        <EmptyComponent text="Your Shopping Bag is empty!" />
      ) : (
        <ParentDiv>
          <TitleParentDiv></TitleParentDiv>

          <ItemAndCheckoutDiv>
            <StyledItemCardDiv>
              <ItemCard />
            </StyledItemCardDiv>
            <CheckoutCard />
          </ItemAndCheckoutDiv>
        </ParentDiv>
      )}
    </>
  )
}
