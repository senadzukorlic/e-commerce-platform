import axios from "axios"

export async function GetData() {
  let limit = 194
  let skip = 0
  try {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    )
    const data = response.data.products
    return data
  } catch (error) {
    console.log(`Data was not successfully fetched`, error)
  }
}

const newProducts = [
  { id: 78, salePrice: 1549.99 },
  { id: 83, salePrice: 19.99 },
  { id: 85, salePrice: 24.99 },
  { id: 88, salePrice: 119.99 },
  { id: 101, salePrice: 449.99 },
]
