import { styled } from "@mui/material/styles"
import { Card } from "@mui/material"
import Button from "@mui/material/Button"
export const StyledCheckoutCard = styled(Card)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: start;
  height: 700px;
  width: 430px;
  background-color: whitesmoke;
  margin: 90px 30px;
  padding: 30px;
`

export const SignInButton = styled(Button)`
  width: 430px;
  height: 50px;
  border: 2px solid black;
  color: black;
  border-radius: 0px;
  font-weight: 700;
`

export const LineDiv1 = styled("div")`
  border: 1px solid gray;
  width: 430px;
  height: 0px;
`
export const LineDiv2 = styled("div")`
  border: 1px solid black;
  width: 430px;
  height: 0px;
`

export const P1 = styled("p")`
  font-family: "Roboto";
  color: black;
`
export const P2 = styled("p")`
  font-family: "Roboto";
  color: gray;
  justify-content: start;
  align-items: start;
`
export const H3 = styled("h3")`
  font-family: "Roboto";
  color: black;
`
export const CheckoutButton = styled(Button)`
  width: 430px;
  height: 50px;
  border: 2px solid black;
  background-color: black;
  color: white;
  border-radius: 0px;
  font-weight: 700;
  &:hover {
    color: black;
  }
`
