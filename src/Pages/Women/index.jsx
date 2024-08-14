import React, { useState, useContext } from "react"
import { useDataContext } from "../../Hooks/useContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { Pagination } from "../../Components/Pagination/index"
import { ProductCard } from "../../Components/ProductCard"
import { womenCategories, womenClothes } from "../../Config/categories"

function Women() {
  const { data } = useDataContext()
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

      <ProductCard filteredItems={filteredItems} />
    </>
  )
}

export default Women
