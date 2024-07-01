import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { Link } from "react-router-dom"

export const GlobalStyles = createGlobalStyle`
  body {
    /* margin: 0; */
    padding: 0;
    overflow: inherit;
}
`

export const Jacpi = styled.span`
  font-family: monospace;
  font-weight: 900;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
`

export const Shop = styled.span`
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
`
export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 8%;
`
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
  height: 8%;
`

export const NavBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  gap: 20px;
  font-size: 20px;
  height: 6vh;
  width: 100%;
`

export const Image = styled.img`
  width: 270px;
  height: 300px;
`

export const ItemTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  color: whitesmoke;
  font-weight: 500;
`
export const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;

  &:hover {
    background-color: gray;
  }
`

export const CartAndBuyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90%;
  height: 20%;
`

export const CartAndBuyButton = styled.button`
  width: 200px;
  height: 35px;
  border-radius: 20px;
  background-color: gray;
  border-color: whitesmoke;
  color: whitesmoke;
`

export const Links = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  background-color: red;
  border-radius: 10px;
  width: 100px;
  height: 25px;
  font-style: italic;
`
export const Price = styled.h3`
  color: whitesmoke;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const ParentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

import CardMedia from "@mui/material/CardMedia"
export const Imagee = styled(CardMedia)`
  border-color: whitesmoke;
  background-color: whitesmoke;
`
import CardContent from "@mui/material/CardContent"
export const CardText = styled(CardContent)`
  background-color: whitesmoke;
`

import CardActions from "@mui/material/CardActions"
export const ButtonCard = styled(CardActions)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 20%;
  color: black;
`

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 550px;
  width: 350px;
  background-color: gray;
  border-radius: 20px;
  margin: 90px 30px;
`

import Box from "@mui/material/Box"

export const BoxTab = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  max-width: 320px;
  @media (min-width: 600px) {
    max-width: 480px;
  }
`
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: auto;
  margin-top: 20px;
`
