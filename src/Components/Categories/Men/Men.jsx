import React from "react"
import { ProductData } from "../../ProductCard/ProductCard"
import { CategoryH1 } from "./TabStyles"
import MenTab from "./MenTab"

const categories = ["mens-watches", "mens-shoes", "mens-shirts"]

function Men() {
  return (
    <>
      <CategoryH1>Men</CategoryH1>
      <MenTab />
      <ProductData categories={categories} />
    </>
  )
}

export default Men

//83,85,87,88,93,94

//za top ponudu 87,93,86 ako zafali 174,78
