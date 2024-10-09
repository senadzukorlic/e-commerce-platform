import {
  selectSizeDetail,
  selectMenShoes,
  selectWomenShoes,
  selectLaptopSize,
  selectTabletSize,
  selectWomenWatches,
  selectMenWatches,
  someThings,
} from "../Config/size"

export function getSizeOptions(category) {
  if (someThings.includes(category)) return []

  switch (category) {
    case "mens-shoes":
      return selectMenShoes
    case "womens-shoes":
      return selectWomenShoes
    case "laptops":
      return selectLaptopSize
    case "tablets":
      return selectTabletSize
    case "mens-watches":
      return selectMenWatches
    case "womens-watches":
      return selectWomenWatches
    case "mens-shirts":
    case "tops":
    case "womens-dresses":
      return selectSizeDetail
    default:
      return []
  }
}
