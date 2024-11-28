// import * as React from "react"
// import Box from "@mui/material/Box"
// import { DataGrid } from "@mui/x-data-grid"
// import { useDemoData } from "@mui/x-data-grid-generator"

// export default function Loader() {
//   const { data } = useDemoData({
//     dataSet: "Commodity",
//     rowLength: 6,
//     maxColumns: 6,
//   })

//   return (
//     <Box sx={{ width: "100%", height: 400 }}>
//       <DataGrid {...data} loading />
//     </Box>
//   )
// }

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
        height: "100%", // Možete prilagoditi visinu u zavisnosti od pozicije
      }}
    >
      <CircularProgress size={size} />
    </Box>
  )
}
