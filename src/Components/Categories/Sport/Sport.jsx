import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"

const categories = ["sports-accessories"]

function Sport() {
  return (
    <>
      <CategoryH1>Sport</CategoryH1>
      <ProductData categories={categories} />
    </>
  )
}

export default Sport
