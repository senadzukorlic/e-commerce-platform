import { styled } from "@mui/material/styles"
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  MenuItem,
} from "@mui/material"
import { Select as MuiSelect } from "@mui/material"

export const EmptyItemCard = styled(Card)`
  display: flex;
  flex-wrap: row;
  justify-content: space-around;
  height: 300px;
  width: 750px;
  background-color: whitesmoke;
  margin: 90px 60px;
`

export const H1 = styled("h1")`
  font-family: "Roboto";
  padding: 70;
  font-weight: 700;
`

export const StyledItemCard = styled(Card)`
  display: flex;
  flex-wrap: row;
  justify-content: space-around;
  height: 300px;
  width: 750px;
  background-color: whitesmoke;
  margin: 90px 60px;
`

export const CardContentImageStyled = styled(CardContent)`
  margin-right: 20px;
  width: 270px;
  height: 260px;
`

export const Image = styled(CardMedia)`
  margin: 20px;
  width: 160px;
  height: 220px;
  margin-left: 50px;
  background-color: white;
`

export const CardContentTitleStyled = styled(CardContent)`
  margin: 20px;
  width: 430px;
  height: 240px;
`
export const TitleAndIconDiv = styled("div")`
  display: flex;
  flex-wrap: row;
  justify-content: space-between;
`

export const TitleDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: large;
  font-family: "Roboto";
  font-weight: 600;
  height: 55px;
`

export const IconDiv1 = styled("div")``

export const DeleteButton = styled(IconButton)``

export const ItemInfoDiv = styled("div")`
  display: flex;
  flex-wrap: row;
  justify-content: space-around;
  font-size: large;
  font-family: "Roboto";
  font-weight: 500;
  height: 85px;
`

export const PDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  font-family: "Roboto";
  font-weight: 400;
  font-size: small;
  height: 55px;
  margin-right: 60px;
`

export const IconDiv = styled("div")`
  display: flex;
  flex-wrap: row;
  justify-content: start;
  align-items: center;
  height: 130px;
  gap: 40px;
`

export const HeartButton = styled(IconButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border: 1px solid black;
  border-radius: 4px;
  color: red;
  transition: all 0.3s ease;
  width: 50px;
  height: 40px;

  &:hover {
    color: black;
  }
`

export const QuantityDiv = styled("div")`
  display: flex;
  flex-direction: column;
`

export const Select = styled(MuiSelect)`
  width: 60px;
  .MuiOutlinedInput-input {
    padding: 10px;
  }
  .MuiSelect-select {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MenuItemStyled = styled(MenuItem)``
