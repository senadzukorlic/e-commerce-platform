import { styled } from "@mui/material/styles"

import Button from "@mui/material/Button"

export const SubmitButton = styled(Button)`
  width: 330px;
  height: 50px;
  border: 2px solid black;
  background-color: black;
  color: white;
  border-radius: 0px;
  font-weight: 700;
  &:hover {
    color: black;
  }
`
