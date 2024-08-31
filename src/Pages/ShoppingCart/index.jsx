import * as React from "react"
import {
  ParentDiv,
  StyledItemCardDiv,
  ItemAndCheckoutDiv,
  TitleParentDiv,
  H1,
  P,
} from "./style"
import { EmptyComponent } from "../../Components/Empty"
import { useDataContext } from "../../Hooks/useContext"
import { ItemCard } from "./itemCard"
import { CheckoutCard } from "./checkoutCard"

export function ShoppingCart() {
  const { cartData } = useDataContext()
  return (
    <>
      {cartData.length === 0 ? (
        <EmptyComponent text="Your Shopping Bag is empty!" />
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
