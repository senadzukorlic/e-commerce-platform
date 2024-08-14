import { useState } from "react"
import { Link } from "react-router-dom"
import { LogIn } from "../SignIn"
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
  AboutLink,
} from "./style"

import { StarOutlineRounded, SearchRounded } from "@mui/icons-material"
import { useDataContext } from "../../Hooks/useContext"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Badge from "@mui/material/Badge"

import logo from "../../Assets/JacpiStore.png"
import SideBar from "./sideBar"

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const { setInputValue, inputValue, cartCount } = useDataContext()
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
  const [isModalOpen, setOpen] = useState(false)
  const handleModalOpen = () => setOpen(true)
  const handleModalClose = () => setOpen(false)

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
            <NavBarButton size="large">
              <AboutLink to="about-us">About</AboutLink>{" "}
            </NavBarButton>
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
              component={Link}
              to="/favorite"
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
              onClick={handleModalOpen}
            >
              <PersonIcon />
            </NavBarIconButton>
          </IconDiv>
        </NavBarToolbar>
      </NavBarAppBar>
      <SideBar open={drawerOpen} onClose={toggleDrawer(false)} />
      <LogIn open={isModalOpen} handleClose={handleModalClose} />
    </>
  )
}
