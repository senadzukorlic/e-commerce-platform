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
      {cartData.length === 0 ? (
        <>
          <PageTitle title="Shopping bag" />
          <EmptyComponent text="Your Shopping Bag is empty!" />
        </>
      ) : (
        <ParentDiv>
          <TitleParentDiv>
            <P>Members get free delivery over £30 and free returns.</P>
            <H1>Shopping bag</H1>
          </TitleParentDiv>

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
