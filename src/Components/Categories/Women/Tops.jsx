import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import WomenTab from "./WomenTab"

const categories = ["tops"]

function Tops() {
  return (
    <>
      <CategoryH1>Tops</CategoryH1>
      <WomenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Tops
