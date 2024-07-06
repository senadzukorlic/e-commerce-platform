import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import ElectronicTab from "./ElectronicTab"

const categories = ["smartphones"]

function Smartphones() {
  return (
    <>
      <CategoryH1>Smartphones</CategoryH1>
      <ElectronicTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Smartphones
