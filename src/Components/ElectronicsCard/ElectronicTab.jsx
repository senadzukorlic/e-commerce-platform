import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

import { BoxTab, CenteredContainer } from "../../items.styled"

export default function ElectronicTab() {
  const location = useLocation()
  const path = location.pathname

  const getValueFromPath = (path) => {
    switch (path) {
      case "/electronics":
        return 0
      case "/mobile-accessories":
        return 1
      case "/laptops":
        return 2
      case "/smartphones":
        return 3
      case "/tablets":
        return 4
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
          <Tab label="all" component={Link} to="/electronics" />

          <Tab
            label="Mobile Accessories"
            component={Link}
            to="/mobile-accessories"
          />
          <Tab label="Laptops" component={Link} to="/laptops" />
          <Tab label="Smartphones" component={Link} to="/smartphones" />
          <Tab label="Tablets" component={Link} to="/tablets" />
        </Tabs>
      </BoxTab>
    </CenteredContainer>
  )
}
