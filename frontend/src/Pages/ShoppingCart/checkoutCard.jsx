import { useState } from "react"
import { LogIn } from "../../Components/LogIn/LogIn"
import {
  StyledCheckoutCard,
  LineDiv1,
  P1,
  P2,
  LineDiv2,
  H3,
  SmallDiv,
  CheckoutLink,
} from "./checkoutCardStyle"
import { OutlinedButton } from "../../Components/OutlinedButton/outlinedButton"
import { BlackButton } from "../../Components/blackButton/blackButton"

export function CheckoutCard({ totalPrice }) {
  const [isModalOpen, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const toalAndDiscout = () => {
    if (totalPrice <= 30) {
      return totalPrice + delivery
    }
    return totalPrice
  }
  const delivery = 3.99
  const totalWithDiscount = toalAndDiscout()

  return (
    <>
      <StyledCheckoutCard>
        <P1>Log in to use your personal offers!</P1>

        <BlackButton
          buttonName="Log in"
          width={{ width: "330px" }}
          onClick={handleOpen}
        />

        <br />
        <br />
        <LineDiv1></LineDiv1>

        <SmallDiv>
          <P2>Order value</P2>
          <P2>{totalPrice > 0 ? `${totalPrice.toFixed(2)}€` : `0€`}</P2>
        </SmallDiv>
        <SmallDiv>
          <P2>Delivery</P2>
          <P2>{totalPrice > 0 && totalPrice < 30 ? `${delivery}€` : `0€`}</P2>
        </SmallDiv>

        <LineDiv2></LineDiv2>
        <SmallDiv>
          <H3>Total: </H3>
          <H3>{totalPrice > 0 ? `${totalWithDiscount.toFixed(2)}€` : `0€`}</H3>
        </SmallDiv>

        <CheckoutLink to="/checkout">
          <OutlinedButton
            width={{ width: "330px" }}
            buttonName="Continue to checkout"
          ></OutlinedButton>
        </CheckoutLink>
        <P2>
          Prices and delivery costs are not confirmed until you've reached the
          checkout.
        </P2>
      </StyledCheckoutCard>
      <LogIn open={isModalOpen} handleClose={handleClose} />
    </>
  )
}
