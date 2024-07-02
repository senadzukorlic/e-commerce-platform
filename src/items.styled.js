import styled from "styled-components"

import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
  
    padding: 0;
    margin: 0;
    overflow: inherit;
}
`
export const CategoryH1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  color: gray;
`
export const Image = styled.img`
  width: 270px;
  height: 300px;
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
