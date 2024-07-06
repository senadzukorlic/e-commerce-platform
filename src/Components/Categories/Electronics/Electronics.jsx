import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import ElectronicTab from "./ElectronicTab"
import { CategoryH1 } from "./TabStyles"

const categories = ["laptops", "mobile-accessories", "smartphones", "tablets"]

function Electronics() {
  return (
    <>
      <CategoryH1>Electronics</CategoryH1>
      <ElectronicTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Electronics

//101,99,78,79,106
