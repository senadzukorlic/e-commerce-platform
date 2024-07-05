import * as React from "react"
import Stack from "@mui/material/Stack"
// import { ButtonHome } from "../muiStyles"
export default function HomeButtons() {
  return (
    <Stack spacing={2} direction="row">
      <ButtonHome variant="outlined">Men</ButtonHome>
      <ButtonHome variant="outlined">Women</ButtonHome>
      <ButtonHome variant="outlined">Electronics</ButtonHome>
      <ButtonHome variant="outlined">Sport</ButtonHome>
    </Stack>
  )
}
