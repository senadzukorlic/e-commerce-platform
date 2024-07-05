import { styled } from "@mui/material/styles"

import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  Menu,
  OutlinedInput,
  IconButton,
  MenuItem,
} from "@mui/material"

export const Logo = styled("img")`
  height: 50px;
  margin-left: 40px;
`
export const IconDiv = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 40px;
`

export const NavBarAppBar = styled(AppBar)`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: gray;
  position: static;
`
export const NavBarToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const NavBarStack = styled(Stack)(({ theme }) => ({
  marginRight: "auto",
  marginLeft: "30px",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(4),
}))

export const NavBarButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontSize: theme.typography.pxToRem(14),
  padding: theme.spacing(1.5, 3),
}))

export const NavBarMenu = styled(Menu)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  width: "300px",
}))

export const NavBarInput = styled(OutlinedInput)(({ theme }) => ({
  border: "1px solid whitesmoke",
  borderRadius: "4px",
  padding: "5px",
  height: "30px",
  marginRight: "30px",
  color: "whitesmoke",

  "& .MuiInputBase-input::placeholder": {
    color: "whitesmoke",
    opacity: 1,
    fontSize: "16px",
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "inherit",
  },
}))

export const NavBarIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: "10px",
}))

export const NavBarMenuItem = styled(MenuItem)``
