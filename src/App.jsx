import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

import Home from "./Components/Home"

import { Men } from "./Components/Men"
import { Shirts } from "./Components/MenCard/Shirts"
import { Shoes } from "./Components/MenCard/Shoes"
import { Watches } from "./Components/MenCard/Watches"

import { Women } from "./Components/Women"
import { Bags } from "./Components/WomenCard/Bags"
import { Dresses } from "./Components/WomenCard/Dresses"
import { WShoes } from "./Components/WomenCard/Shoes"
import { Tops } from "./Components/WomenCard/Tops"
import { WWatches } from "./Components/WomenCard/Watches"

import { Sport } from "./Components/Sport"

import { Electronics } from "./Components/Electronics"
import { Laptops } from "./Components/ElectronicsCard/Laptops"
import { Smartphones } from "./Components/ElectronicsCard/Smartphones"
import { Tablets } from "./Components/ElectronicsCard/Tablets"
import { MobileAccessories } from "./Components/ElectronicsCard/MobileAccessories"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/men" element={<Men />} />
        <Route path="/mens-shirts" element={<Shirts />} />
        <Route path="/mens-shoes" element={<Shoes />} />
        <Route path="/mens-watches" element={<Watches />} />

        <Route path="/women" element={<Women />} />
        <Route path="/tops" element={<Tops />} />
        <Route path="/womens-dresses" element={<Dresses />} />
        <Route path="/womens-bags" element={<Bags />} />
        <Route path="/womens-shoes" element={<WShoes />} />
        <Route path="/womens-watches" element={<WWatches />} />

        <Route path="/electronics" element={<Electronics />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/mobile-accessories" element={<MobileAccessories />} />

        <Route path="/sport" element={<Sport />} />
      </Routes>
    </>
  )
}

export default App
