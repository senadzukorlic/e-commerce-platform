import {
  Card,
  styled,
  CardMedia,
  CardContent,
  Button,
  IconButton,
} from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding-top: 50px;
  padding-left: 140px;
  gap: 60px;
`

export const CardProductDetail = styled(Card)`
  display: flex;
  flex-direction: column; /* Makes sure content is stacked vertically */
  border-radius: 20px;
  border: none;
  box-shadow: none;
  padding: 20px;
  width: 35%;
  background-color: white;
`

export const CardContentImageStyled = styled(CardContent)`
  position: relative;
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* overflow: hidden;  */
`

export const Image = styled(CardMedia)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    rgb(190, 190, 190),
    rgb(210, 210, 210),
    rgb(190, 190, 190)
  );
`

export const ButtonSize = styled(Button)`
  color: black;
  border-color: black;

  &:hover {
    background-color: white;
    border: 2px solid black;
  }
`
export const AddToBagButton = styled(Button)`
  background-color: black;
  color: white;
  font-weight: bolder;
  height: 45px;
  border-radius: 20px;
  border: 1px solid gray;
  transition: background-color 0.1s ease, color 0.1s ease,
    border-color 0.1s ease;
  &:hover {
    background-color: gray;
  }
`
export const FavoriteButton = styled(Button)`
  background-color: white;
  color: black;
  font-weight: bolder;
  height: 45px;
  border-radius: 20px;
  border: 1px solid gray;
  transition: background-color 0.1s ease, color 0.1s ease,
    border-color 0.1s ease;
  &:hover {
    background-color: white;
    border: 2px solid black;
  }
`
export const SizeButtonDiv = styled("div")`
  padding-bottom: 20px;
  height: 3vh;
  display: flex;
  align-items: center;
`
export const ArrowButton = styled(IconButton)`
  position: absolute;
  bottom: 30px;

  background-color: white;
  color: gray;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`
