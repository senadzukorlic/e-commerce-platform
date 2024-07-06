import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import WomenTab from "./WomenTab"

const categories = ["womens-dresses"]

function Dresses() {
  return (
    <>
      <CategoryH1>Dresses</CategoryH1>
      <WomenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Dresses
