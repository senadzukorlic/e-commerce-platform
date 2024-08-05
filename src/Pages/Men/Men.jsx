import React, { useState, useContext } from "react"
import { DataContext } from "../../Context/CreateContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { Pagination } from "../../Components/Pagination/index"
import { ProductData } from "../../Components/ProductCard/ProductCard"
import { menCategories, menClothes } from "../../Config/categories"

function Men() {
  const { data } = useContext(DataContext)
  const [activeCategory, setActiveCategory] = useState(menClothes)

  const handleTabChange = (event, newValue) => {
    setActiveCategory(newValue)
  }

  const filteredItems = useFilterItems(data, activeCategory)

  return (
    <>
      <Pagination
        value={activeCategory}
        onChange={handleTabChange}
        categories={menCategories}
        categoryName="Men"
      />

      <ProductData filteredItems={filteredItems} />
    </>
  )
}

export default Men
