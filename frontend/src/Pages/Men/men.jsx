import React, { useState } from "react"
import { useDataContext } from "../../Hooks/useContext"
import { useFilterItems } from "../../Hooks/useFilterItems"
import { Pagination } from "../../Components/Pagination/pagination"
import { ProductCard } from "../../Components/ProductCard/productCard"
import { menCategories, menClothes } from "../../Config/categories"

function Men() {
  const { data } = useDataContext()
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

      <ProductCard filteredItems={filteredItems} />
    </>
  )
}

export default Men
