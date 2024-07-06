import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

import { BoxTab, CenteredContainer } from "./TabStyles"

export default function MenTab() {
  const location = useLocation()
  const path = location.pathname

  const getValueFromPath = (path) => {
    switch (path) {
      case "/men":
        return 0
      case "/mens-shirts":
        return 1
      case "/mens-shoes":
        return 2
      case "/mens-watches":
        return 3
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
          <Tab label="all" component={Link} to="/men" />
          <Tab label="Mens Shirts" component={Link} to="/mens-shirts" />
          <Tab label="Men Shoes" component={Link} to="/mens-shoes" />
          <Tab label="Watches" component={Link} to="/mens-watches" />
        </Tabs>
      </BoxTab>
    </CenteredContainer>
  )
}
