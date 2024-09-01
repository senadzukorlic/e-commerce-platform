import React, { useState } from "react"
import { useDataContext } from "../../Hooks/useContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { Pagination } from "../../Components/Pagination/pagination"
import { ProductCard } from "../../Components/ProductCard/productCard"
import { electronics, electronicsCategories } from "../../Config/categories"

function Electronics() {
  const { data } = useDataContext()
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

      <ProductCard filteredItems={filteredItems} />
    </>
  )
}

export default Electronics
