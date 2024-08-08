import { styled } from "@mui/material"
import { CardMedia, Typography, Link } from "@mui/material"

export const StyledAboutUsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  height: 480px;
`

export const StyledPersonCard = styled("div")`
  background-color: whitesmoke;
  margin-top: 30px;
  width: 350px;
  border-radius: 20px;
  height: 400px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

export const StyledImageContainer = styled("div")`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const StyledSocialLinksContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 18vh;
  gap: 60px;
`

export const StyledCardContent = styled("div")`
  height: 200px;
`

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 120,
  height: 120,
  display: "flex",
  borderRadius: "50%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  textDecoration: "center",
  border: "none",
  boxShadow: theme.shadows[3],
}))

export const StyledTypographyName = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontWeight: 900,
  color: "inherit",
  textAlign: "center",
  paddingTop: "5px",
}))

export const StyledTypographyCity = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 900,
  color: "gray",
  textAlign: "center",
}))
export const LineDiv = styled("div")(({ theme }) => ({
  borderTop: `2px solid ${theme.palette.divider}`,
  margin: `${theme.spacing(2)} 0`,
  width: "90%",
  marginLeft: "20px",
}))
export const StyledTypographyDescription = styled(Typography)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: 100,
  color: "gray",
  textAlign: "center",
}))

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
  svg: {
    fontSize: "3.5rem",
  },
}))
