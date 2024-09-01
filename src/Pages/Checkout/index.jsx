import React from "react"
import { CheckoutCard } from "../ShoppingCart/checkoutCard"
import { MyInformation } from "./myInformation"
import { CheckoutContainer, Header, ContentRow } from "./style.js"

export function Checkout() {
  return (
    <CheckoutContainer>
      <Header>Checkout</Header>
      <ContentRow>
        <MyInformation />
        <CheckoutCard />
      </ContentRow>
    </CheckoutContainer>
  )
}
