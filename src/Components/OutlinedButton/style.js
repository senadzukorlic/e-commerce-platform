import { styled } from "@mui/material/styles"

import Button from "@mui/material/Button"

export const StyleButton = styled(Button)`
  height: 50px;
  border: 2px solid black;
  background-color: none;
  color: black;
  border-radius: 0px;
  font-weight: 700;
  &:hover {
    color: black;
  }
`
