import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import WomenTab from "./WomenTab"

const categories = [
  "tops",
  "womens-bags",
  "womens-dresses",
  "womens-shoes",
  "womens-watches",
]

function Women() {
  return (
    <>
      <CategoryH1>Women</CategoryH1>
      <WomenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Women

//162,178,181,188,189,173,174
