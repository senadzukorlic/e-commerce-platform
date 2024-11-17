import { styled } from "@mui/material/styles"

import Button from "@mui/material/Button"

export const StyleButton = styled(Button)`
  height: 50px;
  border: 3px solid black;
  background-color: #e4bc67;
  color: black;
  border-radius: 0px;
  font-weight: 700;
  &:hover {
    background-color: white;
    color: black;
  }
`
