import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"

export const ButtonHome = styled(Button)`
  color: black;
  border: 1px solid black;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    border: 1px solid black;
  }
`
export const Container = styled("div")`
  height: 100%;
  width: 42%;
  background-color: #e4bc67;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 0;
  margin: 70px;
`
export const HomeH3 = styled("h3")`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: black;
  font-size: 25px;
  margin: 7px;
`
export const HomeH1 = styled("h1")`
  font-family: "Roboto", sans-serif;
  font-size: 75px;
  font-weight: 900;
  color: black;
  margin: 17px;
`
export const HomeP = styled("p")`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: black;
  font-size: 15px;
  margin: 7px;
  padding: 10px;
`
export const HomePDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 15px;
`

export const HomeTitleDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  padding: 0;
`

export const HomeParentDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
`
