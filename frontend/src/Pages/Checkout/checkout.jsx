import React from "react"
import { MyInformation } from "./myInformation.jsx"
import { CheckoutContainer, ContentRow } from "./styleCheckout.js"
import { PageTitle } from "../../Components/PageTitle/pageTitle.jsx"

export function Checkout() {
  return (
    <CheckoutContainer>
      <PageTitle title="Checkout" />
      <ContentRow>
        <MyInformation />
      </ContentRow>
    </CheckoutContainer>
  )
}
