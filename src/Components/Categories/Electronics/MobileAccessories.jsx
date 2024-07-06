import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import ElectronicTab from "./ElectronicTab"

const categories = ["mobile-accessories"]

function MobileAccessories() {
  return (
    <>
      <CategoryH1>Mobile Accessories</CategoryH1>
      <ElectronicTab />
      <ProductData categories={categories} />
    </>
  )
}

export default MobileAccessories
