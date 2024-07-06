import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import MenTab from "./MenTab"

const categories = ["mens-shirts"]

function Shirts() {
  return (
    <>
      <CategoryH1>Shirts</CategoryH1>
      <MenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Shirts
