import { styled } from "@mui/material"

import { CardMedia, Typography, Link, CardContent } from "@mui/material"

export const StyledCardContent = styled(CardContent)`
  background-color: blue;
`

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 150,
  height: 150,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  textDecoration: "center",
  backgroundColor: "purple",
  border: "none",
  boxShadow: theme.shadows[3],
}))

export const StyledTypographyName = styled(Typography)(({ theme }) => ({
  fontSize: "27px",
  fontWeight: 900,
  color: "inherit",
  textAlign: "center",
  marginBottom: theme.spacing(0),
  marginTop: theme.spacing(4),
}))

export const StyledTypographyCity = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 900,
  color: "gray",
  textAlign: "center",
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
}))
export const LineDiv = styled("div")(({ theme }) => ({
  borderTop: `2px solid ${theme.palette.divider}`,
  margin: `${theme.spacing(2)} 0`,
}))
export const StyledTypographyDescription = styled(Typography)(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 100,
  color: "gray",
  textAlign: "center",
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(5),
}))

export const StyledLink = styled(Link)(({ theme }) => ({
  // position: "absolute",
  // bottom: theme.spacing(2),
  // left: "50%",
  // transform: "translateX(-50%)",
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
  svg: {
    fontSize: "4rem", // Znatno uvećajte veličinu ikone
  },
}))
