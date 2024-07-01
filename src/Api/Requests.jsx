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
    console.log(`Data was not successfully fetched`)
  }
}
