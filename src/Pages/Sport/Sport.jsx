import React, { useState, useContext } from "react"
import { DataContext } from "../../Context/CreateContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { Pagination } from "../../Components/Pagination"
import { ProductData } from "../../Components/ProductCard/ProductCard"
import { sportsCategories } from "../../Config/categories"
function Sport() {
  const { data } = useContext(DataContext)
  const [activeCategory, setActiveCategory] = useState(
    sportsCategories[0].category
  )
  const handleTabChange = (event, newValue) => {
    setActiveCategory(newValue)
  }
  const filteredItems = useFilterItems(data, activeCategory)

  return (
    <>
      <Pagination
        value={activeCategory}
        onChange={handleTabChange}
        categories={sportsCategories}
        categoryName="Sports"
      />
      <ProductData filteredItems={filteredItems} />
    </>
  )
}
export default Sport
