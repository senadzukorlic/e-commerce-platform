import { styled } from "@mui/material/styles"
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
export const CenteredContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: start;
  height: auto;
  margin-top: 20px;
`

export const CategoryH1 = styled("h1")`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  color: gray;
`
