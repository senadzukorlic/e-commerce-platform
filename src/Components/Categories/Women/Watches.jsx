import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import WomenTab from "./WomenTab"

const categories = ["womens-watches"]

function WWatches() {
  return (
    <>
      <CategoryH1>Watches</CategoryH1>
      <WomenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default WWatches
