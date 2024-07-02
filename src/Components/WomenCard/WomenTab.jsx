import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

import { BoxTab, CenteredContainer } from "../../items.styled"

export default function WomenTab() {
  const location = useLocation()
  const path = location.pathname

  const getValueFromPath = (path) => {
    switch (path) {
      case "/women":
        return 0
      case "/tops":
        return 1
      case "/womens-dresses":
        return 2
      case "/womens-bags":
        return 3
      case "/womens-shoes":
        return 4
      case "/womens-watches":
        return 5
      default:
        return 0
    }
  }

  const [value, setValue] = useState(getValueFromPath(path))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <CenteredContainer>
      <BoxTab>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="all" component={Link} to="/women" />
          <Tab label="Tops" component={Link} to="/tops" />
          <Tab label="Women Dresses" component={Link} to="/womens-dresses" />
          <Tab label="Women Bags" component={Link} to="/womens-bags" />
          <Tab label="Women Watches" component={Link} to="/womens-watches" />
          <Tab label="Women Shoes" component={Link} to="/womens-shoes" />
        </Tabs>
      </BoxTab>
    </CenteredContainer>
  )
}
