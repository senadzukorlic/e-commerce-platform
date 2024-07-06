import { useState, useEffect, useRef } from "react"
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

import {
  LanguageRounded,
  ShoppingBagRounded,
  StarOutlineRounded,
  SearchRounded,
} from "@mui/icons-material"

import logo from "./JacpiStore.png"
import DrawerR from "./Drawer"

export default function NavBar({ setInputValue }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [input, setInput] = useState("")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [appBarHeight, setAppBarHeight] = useState(0)
  const appBarRef = useRef(null)

  useEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(appBarRef.current.clientHeight)
    }
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleInputSubmit = (e) => {
    e.preventDefault()
    setInput("")
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
    setInputValue(e.target.value)
  }

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const open = Boolean(anchorEl)

  return (
    <>
      <NavBarAppBar ref={appBarRef}>
        <NavBarToolbar>
          <Logo src={logo} alt="Logo" />

          <NavBarStack>
            <NavBarButton
              size="large" //ne diraj
              id="resources-button" //klasu ne diraj
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
            id="resources-menu" //klasu ne diraj
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
              value={input}
              onChange={handleInputChange}
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
              aria-label="star"
            >
              <StarOutlineRounded />
            </NavBarIconButton>

            <NavBarIconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="shopping-bag"
            >
              <ShoppingBagRounded />
            </NavBarIconButton>

            <NavBarIconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="language"
            >
              <LanguageRounded />
            </NavBarIconButton>
          </IconDiv>
        </NavBarToolbar>
      </NavBarAppBar>
      <DrawerR
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        appBarHeight={appBarHeight}
      />
    </>
  )
}
