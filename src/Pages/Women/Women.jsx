import React, { useState, useContext } from "react"
import { DataContext } from "../../Context/CreateContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { Pagination } from "../../Components/Pagination/index"
import { ProductData } from "../../Components/ProductCard/ProductCard"
import { womenCategories, womenClothes } from "../../Config/categories"

function Women() {
  const { data } = useContext(DataContext)
  const [activeCategory, setActiveCategory] = useState(womenClothes)

  const handleTabChange = (event, newValue) => {
    setActiveCategory(newValue)
  }

  const filteredItems = useFilterItems(data, activeCategory)

  return (
    <>
      <Pagination
        value={activeCategory}
        onChange={handleTabChange}
        categories={womenCategories}
        categoryName="Women"
      />

      <ProductData filteredItems={filteredItems} />
    </>
  )
}

export default Women
