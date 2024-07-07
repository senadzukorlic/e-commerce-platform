import * as React from "react"
import Card from "@mui/material/Card"
import Box from "@mui/material/Box"
// import Chip from "@mui/material/Chip"
// import Stack from "@mui/material/Stack"
// import Divider from "@mui/material/Divider"
// import Typography from "@mui/material/Typography"
import { DataContext } from "../../Context/CreateContext"
import { useContext } from "react"
import { CardActionArea } from "@mui/material"
import { CardMedia } from "@mui/material"

export function ShoppingCart() {
  const { cartData } = useContext(DataContext)

  return (
    <>
      {cartData.map((item) => (
        <Card key={item.id} variant="outlined" sx={{ height: 280, width: 750 }}>
          <CardActionArea>
            <Box>
              <CardMedia component="img" image={item.images[0]} />
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </>
  )
}
