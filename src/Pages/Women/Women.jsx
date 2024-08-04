import React, { useState, useContext } from "react"
import { DataContext } from "../../Context/CreateContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { CategoryH1 } from "./TabStyles"
import { Pagination } from "../../Components/Pagination/index"
import { ProductData } from "../../Components/ProductCard/ProductCard"

const womenClothes = [
  "tops",
  "womens-dresses",
  "womens-bags",
  "womens-watches",
  "womens-shoes",
]

const categories = [
  { label: "All", category: womenClothes },
  { label: "Women Dresses", category: ["womens-dresses"] },
  { label: "Tops", category: ["tops"] },

  { label: "Women Bags", category: ["womens-bags"] },
  { label: "Women Watches", category: ["womens-watches"] },
  { label: "Women Shoes", category: ["womens-shoes"] },
]

function Women() {
  const { data } = useContext(DataContext)
  const [activeCategory, setActiveCategory] = useState(womenClothes)

  const handleTabChange = (event, newValue) => {
    setActiveCategory(newValue)
  }

  const filteredItems = useFilterItems(data, activeCategory)

  return (
    <>
      <CategoryH1>Women</CategoryH1>

      <Pagination
        value={activeCategory}
        onChange={handleTabChange}
        categories={categories}
      />

      <ProductData filteredItems={filteredItems} />
    </>
  )
}

export default Women
