import { useState } from "react"
import { Link } from "react-router-dom"
import { LogIn } from "../LogIn/LogIn"
import { LogOutModal } from "../logOutModal/logOutModal"
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
} from "./styleNavBar"

import { StarOutlineRounded, SearchRounded } from "@mui/icons-material"
import { useDataContext } from "../../Hooks/useContext"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import LogoutIcon from "@mui/icons-material/Logout"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Badge from "@mui/material/Badge"
import { useAuth } from "../../Hooks/useAuth"

import logo from "../../assets/jacpiStore.png"
import SideBar from "./sideBar"

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const { setInputValue, inputValue, cartCount, favoriteItems } =
    useDataContext()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth() //isAuthenticated predstavlja stanje autentifikacije korisnika, a logout funkciju za odjavu korisnika

  const [isLogInModalOpen, setLogInModalOpen] = useState(false)
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false)

  const handleLogInModalOpen = () => setLogInModalOpen(true)
  const handleLogInModalClose = () => setLogInModalOpen(false)

  const handleLogOutModalOpen = () => setLogOutModalOpen(true)
  const handleLogOutModalClose = () => setLogOutModalOpen(false)

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

            {isAuthenticated && ( //ako je korisnik autentifikovan,prikazi My Products i Create own product button. Ako nije, ne prikazati,sto mu dodje kao neki vid autorizacije
              <>
                <NavBarButton size="large">My Products</NavBarButton>
                <NavBarButton
                  size="large"
                  component={Link}
                  to="/create-your-own-product"
                >
                  Create own product{" "}
                </NavBarButton>
              </>
            )}

            <NavBarButton size="large" component={Link} to="/about-us">
              About
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
              <Badge
                color="secondary"
                badgeContent={favoriteItems.length}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#E4BC67",
                    color: "white",
                  },
                }}
              >
                <StarOutlineRounded />
              </Badge>
            </NavBarIconButton>

            <NavBarIconButton
              size="small"
              edge="end"
              color="inherit"
              aria-label="shopping-bag"
              component={Link}
              to="/shopping-cart"
            >
              <Badge
                color="secondary"
                badgeContent={cartCount}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#E4BC67",
                    color: "white",
                  },
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </NavBarIconButton>
            {isAuthenticated ? ( //ako je korisnik autentifikovan,prikazi logout button. Ako nije, prikazi login button
              <NavBarIconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="logout"
                onClick={handleLogOutModalOpen} //klikom na logout dugme, korisnik se odjavljuje.tj brise se token iz local storage
              >
                <LogoutIcon />
              </NavBarIconButton>
            ) : (
              <NavBarIconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="language"
                onClick={handleLogInModalOpen}
              >
                <PersonIcon />
              </NavBarIconButton>
            )}
          </IconDiv>
        </NavBarToolbar>
      </NavBarAppBar>
      <SideBar open={drawerOpen} onClose={toggleDrawer(false)} />
      <LogIn open={isLogInModalOpen} handleClose={handleLogInModalClose} />
      <LogOutModal
        open={isLogOutModalOpen}
        handleClose={handleLogOutModalClose}
      />
    </>
  )
}
