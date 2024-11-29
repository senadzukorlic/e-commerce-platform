import { styled } from "@mui/material/styles"

import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import { Box } from "@mui/material"
import { Card } from "@mui/material"

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 610px;
  width: 350px;
  background-color: whitesmoke;
  border-radius: 15px;
  margin: 90px 30px;
`
export const ParentDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Imagee = styled(CardMedia)`
  border-color: whitesmoke;

  position: relative;
  height: 330px;
  width: 270px;
`
export const CardText = styled(CardContent)`
  background-color: whitesmoke;
`
export const ButtonCard = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20%;
  color: black;
`

export const ImageWrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`
export const ButtonDiv = styled("div")`
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`
