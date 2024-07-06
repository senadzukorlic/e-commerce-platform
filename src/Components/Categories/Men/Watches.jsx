import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"

import { CategoryH1 } from "./TabStyles"
import MenTab from "./MenTab"

const categories = ["mens-watches"]

function Watches() {
  return (
    <>
      <CategoryH1>Watches</CategoryH1>
      <MenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Watches
