import FavoriteIcon from "@mui/icons-material/Favorite"
import { styled } from "@mui/material/styles"

const OutlinedHeartIcon = styled(FavoriteIcon)({
  width: "20px",
  height: "20px",
  color: "red",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: "darkred",
  },
})

export default OutlinedHeartIcon
