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

const newProducts = [
  { id: 78, salePrice: 1549.99 },
  { id: 83, salePrice: 19.99 },
  { id: 85, salePrice: 24.99 },
  { id: 88, salePrice: 119.99 },
  { id: 101, salePrice: 449.99 },
]

export async function ProductsOnSale() {
  try {
    const result = []
    for (const newProduct of newProducts) {
      const response = await axios.put(
        `https://dummyjson.com/newProducts/${newProduct.id}`,
        {
          price: newProduct.salePrice,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      result.push(response.data)
    }
    return result
  } catch (error) {
    console.log(`Trouble`, error)
  }
}

export async function DisplayUpdatedProducts() {
  try {
    const updatedProducts = await ProductsOnSale()

    console.log("Updated Products:", updatedProducts)

    return updatedProducts
  } catch (error) {
    console.error("Error fetching updated products:", error)
  }
}
