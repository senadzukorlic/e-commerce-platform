import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import ElectronicTab from "./ElectronicTab"

const categories = ["tablets"]

function Tablets() {
  return (
    <>
      <CategoryH1>Tablets</CategoryH1>
      <ElectronicTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Tablets
