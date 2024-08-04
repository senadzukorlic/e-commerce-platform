import React, { useState, useContext } from "react"
import { DataContext } from "../../Context/CreateContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { Pagination } from "../../Components/Pagination/index"
import { ProductData } from "../ProductCard/ProductCard"
import { electronics, electronicsCategories } from "../../Config/categories"

function Electronics() {
  const { data } = useContext(DataContext)
  const [activeCategory, setActiveCategory] = useState(electronics)

  const handleTabChange = (event, newValue) => {
    setActiveCategory(newValue)
  }

  const filteredItems = useFilterItems(data, activeCategory)

  return (
    <>
      <Pagination
        value={activeCategory}
        onChange={handleTabChange}
        categories={electronicsCategories}
        categoryName="Electronics"
      />

      <ProductData filteredItems={filteredItems} />
    </>
  )
}

export default Electronics
