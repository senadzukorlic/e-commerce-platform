import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import MenTab from "./MenTab"

const categories = ["mens-shoes"]

function Shoes() {
  return (
    <>
      <CategoryH1>Shoes</CategoryH1>
      <MenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Shoes
