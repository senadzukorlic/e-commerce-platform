import * as React from "react"
import Stack from "@mui/material/Stack"
import { ButtonHome } from "./style"
import { Link } from "react-router-dom"
export default function Buttons() {
  return (
    <Stack spacing={2} direction="row">
      <ButtonHome variant="outlined" component={Link} to="/men">
        Men
      </ButtonHome>
      <ButtonHome variant="outlined" component={Link} to="/women">
        Women
      </ButtonHome>
      <ButtonHome variant="outlined" component={Link} to="/electronics">
        Electronics
      </ButtonHome>
      <ButtonHome variant="outlined" component={Link} to="/sport">
        Sport
      </ButtonHome>
    </Stack>
  )
}
