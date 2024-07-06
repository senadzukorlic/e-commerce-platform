import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import WomenTab from "./WomenTab"

const categories = ["womens-shoes"]

function WShoes() {
  return (
    <>
      <CategoryH1>Shoes</CategoryH1>
      <WomenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default WShoes
