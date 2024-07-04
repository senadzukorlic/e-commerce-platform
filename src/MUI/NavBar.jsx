import {
  AppBar,
  Toolbar,
  IconButton,
  OutlinedInput,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material"

import {
  LanguageRounded,
  ShoppingBagRounded,
  StarOutlineRounded,
  SearchRounded,
} from "@mui/icons-material"

import { Link } from "react-router-dom"

import { useState } from "react"
import "./MUI.css"
import logo from "./JacpiStore.png"

export default function NavBar({ setInputValue }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [input, setInput] = useState("")

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

  const open = Boolean(anchorEl)

  return (
    <AppBar
      position="static"
      className="appBar"
      style={{ backgroundColor: "gray" }}
    >
      <Toolbar className="toolBar">
        <img src={logo} alt="Logo" className="logo" />

        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          className="stackCategories"
        >
          <Button
            size="large"
            style={{ color: "white" }}
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Clothes
          </Button>
          <Button size="large" style={{ color: "white" }}>
            On Sale
          </Button>
          <Button size="large" style={{ color: "white" }}>
            About
          </Button>
        </Stack>

        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/men">
            Men
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/women">
            Women
          </MenuItem>

          <MenuItem onClick={handleClose} component={Link} to="/electronics">
            Electronics
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/sport">
            Sport
          </MenuItem>
        </Menu>

        <form onSubmit={handleInputSubmit}>
          <OutlinedInput
            className="input"
            placeholder="Search..."
            value={input}
            onChange={handleInputChange}
          />
        </form>
        <div className="iconContainer">
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="search"
            className="iconButton"
          >
            <SearchRounded />
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="star"
            className="iconButton"
          >
            <StarOutlineRounded />
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="shopping-bag"
            className="iconButton"
          >
            <ShoppingBagRounded />
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="language"
            className="iconButton"
          >
            <LanguageRounded />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}
