import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import WomenTab from "./WomenTab"

const categories = ["womens-bags"]

function Bags() {
  return (
    <>
      <CategoryH1>Bags</CategoryH1>
      <WomenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Bags
