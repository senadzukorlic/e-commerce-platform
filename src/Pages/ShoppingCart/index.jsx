import * as React from "react"

import {
  ParentDiv,
  StyledItemCardDiv,
  ItemAndCheckoutDiv,
  TitleParentDiv,
  H1,
  P,
} from "./style"

import { ItemCard } from "./itemCard"
import { CheckoutCard } from "./checkoutCard"

export function ShoppingCart() {
  return (
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
  )
}
