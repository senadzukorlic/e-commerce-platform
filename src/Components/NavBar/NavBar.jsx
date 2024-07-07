import { useState, useContext } from "react"
import { Link } from "react-router-dom"

import {
  Logo,
  IconDiv,
  NavBarAppBar,
  NavBarToolbar,
  NavBarStack,
  NavBarButton,
  NavBarMenu,
  NavBarInput,
  NavBarIconButton,
  NavBarMenuItem,
} from "./NavBarStyles"

import { StarOutlineRounded, SearchRounded } from "@mui/icons-material"
import { DataContext } from "../../Context/CreateContext"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Badge from "@mui/material/Badge"

import logo from "./JacpiStore.png"
import DrawerR from "./Drawer"

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const { setInputValue, inputValue, cartCount } = useContext(DataContext)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    setInputValue("")
  }

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <NavBarAppBar>
        <NavBarToolbar>
          <Logo src={logo} alt="Logo" />

          <NavBarStack>
            <NavBarButton
              size="large"
              id="resources-button"
              onClick={toggleDrawer(true)}
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Clothes
            </NavBarButton>
            <NavBarButton size="large">On Sale</NavBarButton>
            <NavBarButton size="large">About</NavBarButton>
          </NavBarStack>

          <NavBarMenu
            id="resources-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{ "aria-labelledby": "resources-button" }}
            onClose={handleClose}
          >
            <NavBarMenuItem onClick={handleClose} component={Link} to="/men">
              Men
            </NavBarMenuItem>
            <NavBarMenuItem onClick={handleClose} component={Link} to="/women">
              Women
            </NavBarMenuItem>

            <NavBarMenuItem
              onClick={handleClose}
              component={Link}
              to="/electronics"
            >
              Electronics
            </NavBarMenuItem>
            <NavBarMenuItem onClick={handleClose} component={Link} to="/sport">
              Sport
            </NavBarMenuItem>
          </NavBarMenu>

          <form onSubmit={handleInputSubmit}>
            <NavBarInput
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
          <IconDiv>
            <NavBarIconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="search"
            >
              <SearchRounded />
            </NavBarIconButton>
            <NavBarIconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="search"
              component={Link}
              to="/"
            >
              <HomeIcon />
            </NavBarIconButton>
            <NavBarIconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="star"
            >
              <StarOutlineRounded />
            </NavBarIconButton>

            <NavBarIconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="shopping-bag"
              component={Link}
              to="/shopping-cart"
            >
              <Badge color="secondary" badgeContent={cartCount}>
                <ShoppingCartIcon />
              </Badge>
            </NavBarIconButton>

            <NavBarIconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="language"
            >
              <PersonIcon />
            </NavBarIconButton>
          </IconDiv>
        </NavBarToolbar>
      </NavBarAppBar>
      <DrawerR open={drawerOpen} onClose={toggleDrawer(false)} />
    </>
  )
}
