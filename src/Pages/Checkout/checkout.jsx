import React from "react"
import { CheckoutCard } from "../ShoppingCart/checkoutCard.jsx"
import { MyInformation } from "./myInformation.jsx"
import { CheckoutContainer, Header, ContentRow } from "./styleCheckout.js"
import { PageTitle } from "../../Components/PageTitle/pageTitle.jsx"

export function Checkout() {
  return (
    <CheckoutContainer>
      <PageTitle title="Checkout" />
      <ContentRow>
        <MyInformation />
        <CheckoutCard />
      </ContentRow>
    </CheckoutContainer>
  )
}
