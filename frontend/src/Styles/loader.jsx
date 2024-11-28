import React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

export default function Loader({ size = 40 }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "69vh",
        width: "100%",
      }}
    >
      <CircularProgress size={size} />
    </Box>
  )
}
