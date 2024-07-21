import { Card, styled, CardMedia, CardContent, Button } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  flex-wrap: row;
  justify-content: space-around;
  height: 100vh;
  padding-top: 50px;
`
export const CardProductDetail = styled(Card)`
  display: flex;
  flex-wrap: row;
  justify-content: space-around;
  border-radius: 20px;
  padding: 20px;
  width: 90%;
  height: 75vh;
  background-color: whitesmoke;
`
export const Image = styled(CardMedia)`
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 45vw;
  height: 70vh;
  background-color: white;
`

export const CardContentImageStyled = styled(CardContent)`
  margin-right: 40px;
  width: 45vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
  justify-content: "center";
  align-items: center;
`

export const ButtonSize = styled(Button)`
  color: black;
  border-color: black;

  &:hover {
    color: white;
    background-color: black;
    border-color: black;
  }
`
