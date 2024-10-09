import React, { useState } from "react"
import { useDataContext } from "../../Hooks/useContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { Pagination } from "../../Components/Pagination/pagination"
import { ProductCard } from "../../Components/ProductCard/productCard"
import { sportsCategories } from "../../Config/categories"
function Sport() {
  const { data } = useDataContext()
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
      <ProductCard filteredItems={filteredItems} />
    </>
  )
}
export default Sport
