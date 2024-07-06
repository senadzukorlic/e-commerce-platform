import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import ElectronicTab from "./ElectronicTab"

const categories = ["laptops"]

function Laptops() {
  return (
    <>
      <CategoryH1>Laptops</CategoryH1>
      <ElectronicTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Laptops
