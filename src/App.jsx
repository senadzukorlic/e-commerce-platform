import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

import Home from "./Home"
import { MenCard } from "./Card/MenCard"
import { WomenCard } from "./Card/WomenCard"
import { Sport } from "./Card/Sport"
import { Electronics } from "./Card/Electronics"

import { Laptops } from "./Card/ElectronicsCard/Laptops"
import { Smartphones } from "./Card/ElectronicsCard/Smartphones"
import { Tablets } from "./Card/ElectronicsCard/Tablets"
import { MobileAccessories } from "./Card/ElectronicsCard/MobileAccessories"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenCard />} />
        <Route path="/women" element={<WomenCard />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/electronics" element={<Electronics />} />

        <Route path="/laptops" element={<Laptops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/mobile-accessories" element={<MobileAccessories />} />
      </Routes>
    </>
  )
}

export default App
