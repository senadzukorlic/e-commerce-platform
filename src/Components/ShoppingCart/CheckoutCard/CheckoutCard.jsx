import { useContext } from "react"
import { DataContext } from "../../../Context/CreateContext"

import {
  StyledCheckoutCard,
  SignInButton,
  LineDiv1,
  P1,
  P2,
  LineDiv2,
  H3,
  CheckoutButton,
  SmallDiv,
} from "./CheckoutCardStyled"

export function CheckoutCard() {
  const { total } = useContext(DataContext)

  return (
    <>
      <StyledCheckoutCard>
        <P1>Log in to use your personal offers!</P1>
        <SignInButton>Sign in</SignInButton>
        <br />
        <br />
        <LineDiv1></LineDiv1>

        <SmallDiv>
          <P2>Order value</P2>
          <P2>{total > 0 ? `${total.toFixed(2)}€` : `0€`}</P2>
        </SmallDiv>
        <SmallDiv>
          <P2>Discount </P2>
        </SmallDiv>
        <SmallDiv>
          <P2>Delivery</P2>
          <P2>{total > 0 && total < 30 ? `3.99€` : `0€`}</P2>
        </SmallDiv>

        <LineDiv2></LineDiv2>
        <SmallDiv>
          <H3>Total: </H3>
          <H3>{total > 0 ? `${total.toFixed(2)}€` : `0€`}</H3>
        </SmallDiv>

        <CheckoutButton>Continue to checkout</CheckoutButton>
        <P2>
          Prices and delivery costs are not confirmed until you've reached the
          checkout.
        </P2>
      </StyledCheckoutCard>
    </>
  )
}
