// import { Card, styled, CardMedia, CardContent, Button } from "@mui/material"

// export const ParentDiv = styled("div")`
//   display: flex;
//   flex-wrap: row;
//   justify-content: space-around;
//   height: 100vh;
//   padding-top: 50px;
// `
// export const CardProductDetail = styled(Card)`
//   display: flex;
//   flex-wrap: row;
//   justify-content: space-around;
//   border-radius: 20px;
//   padding: 20px;
//   width: 30%;
//   height: 75vh;
//   background-color: whitesmoke;
// `

// export const CardContentImageStyled = styled(CardContent)`
//   margin-right: 40px;
//   padding-top: 200px;
//   background-color: red;
//   width: 35vw;
//   height: 40vh;
//   display: flex;
//   flex-direction: row;
//   justify-content: "center";
//   align-items: center;
//   position: relative;
//   /* background-color: green; */
// `

// export const Image = styled(CardMedia)`
//   background-color: green;
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   align-items: center;
//   width: 45vw;
//   height: 20vh;
//   background-color: white;
// `

// export const ButtonSize = styled(Button)`
//   color: black;
//   border-color: black;

//   &:hover {
//     color: white;
//     background-color: black;
//     border-color: black;
//   }
// `

import { Card, styled, CardMedia, CardContent, Button } from "@mui/material"

export const ParentDiv = styled("div")`
  display: flex;
  align-items: stretch; /* Ensures all children are the same height */
  justify-content: center; /* Space out the children evenly */
  padding-top: 50px;
  padding-left: 140px;
  background-color: "red";
  gap: 40px;
`

export const CardProductDetail = styled(Card)`
  display: flex;
  flex-direction: column; /* Makes sure content is stacked vertically */
  border-radius: 20px;
  border: none;
  box-shadow: none;
  padding: 20px;
  width: 25%;
  background-color: white;
`

export const CardContentImageStyled = styled(CardContent)`
  position: relative;
  width: 35%; /* Adjust as needed */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  overflow: hidden; /* Ensures content doesn't overflow */
`

export const Image = styled(CardMedia)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
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
