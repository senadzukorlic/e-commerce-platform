import { styled } from "@mui/material/styles"

import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import { Box } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const Imagee = styled(CardMedia)`
  border-color: whitesmoke;
  background-color: whitesmoke;
  position: relative;
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
// export const FavoriteButton = styled(Box)`
//   position: absolute;
//   bottom: 8px;
//   right: 8px;
//   background-color: white;
//   border: 2px solid black;
//   border-radius: 50%;
//   padding: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: black;
//   transition: all 0.3s ease;

//   &:hover {
//     color: red;
//     border-color: red;
//   }
// `

import FavoriteIcon from "@mui/icons-material/Favorite"

export const ButtonHeArT = styled(FavoriteIcon)`
  background-color: whitesmoke;
`

export const HeartButton = styled(Box)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: whitesmoke;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  transition: all 0.3s ease;

  &:hover {
    color: red;
  }
`
export const ImageWrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`
