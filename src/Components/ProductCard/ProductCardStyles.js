ParentDiv, Imagee, CardText, ButtonCard
import { styled } from "@mui/material/styles"

import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"

export const ParentDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const Imagee = styled(CardMedia)`
  border-color: whitesmoke;
  background-color: whitesmoke;
`
export const CardText = styled(CardContent)`
  background-color: whitesmoke;
`
export const ButtonCard = styled(CardActions)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20%;
  color: black;
`
