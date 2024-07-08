import { styled } from "@mui/material/styles"

import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import { Box, IconButton } from "@mui/material"
import { Card } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 600px;
  width: 350px;
  background-color: whitesmoke;
  border-radius: 15px;
  margin: 90px 30px;
`
export const ParentDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const Imagee = styled(CardMedia)`
  border-color: whitesmoke;
  background-color: whitesmoke;
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

export const ButtonHeArT = styled(FavoriteIcon)`
  background-color: whitesmoke;
`
export const IconButtonHeart = styled(IconButton)`
  position: absolute;
  bottom: 18px;
  right: 0px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: whitesmoke;
  /* border: 1px solid black; */
  border-radius: 50%;
  color: red;
  transition: all 0.3s ease;
  /* width: 50px;
  height: 40px;

  /* position: absolute;
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
    color: black;
  } */
`

export const HeartButton = styled(Box)`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: whitesmoke;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: e;
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
