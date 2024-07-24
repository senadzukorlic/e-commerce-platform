import { styled } from "@mui/material/styles"

import { IconButton } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-direction: column;
`
export const TitleParentDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

export const H1 = styled("h1")`
  font-family: sans-serif;
  color: gray;
  font-size: 40px;
`
export const P = styled("p")`
  font-family: "Roboto";
  color: gray;
`

export const ItemAndCheckoutDiv = styled("div")`
  display: flex;
  flex-wrap: row;
  justify-content: center;
`

export const StyledItemCardDiv = styled("div")`
  display: flex;
  flex-direction: column;
`

export const DeleteButton = styled(IconButton)``

export const QuantityTitle = styled("p")`
  font-family: "Roboto";
`
