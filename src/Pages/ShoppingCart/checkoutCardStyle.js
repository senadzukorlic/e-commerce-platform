import { styled } from "@mui/material/styles"
import { Card } from "@mui/material"
import { Link } from "react-router-dom"

export const StyledCheckoutCard = styled(Card)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: start;
  height: 500px;
  width: 330px;
  background-color: whitesmoke;
  margin: 90px 30px;
  padding: 30px;
`

export const LineDiv1 = styled("div")`
  border: 1px solid gray;
  width: 330px;
  height: 0px;
`

export const SmallDiv = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 330px;
`

export const LineDiv2 = styled("div")`
  border: 1px solid black;
  width: 330px;
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

export const CheckoutLink = styled(Link)`
  text-decoration: none;
  color: white;
`
