import { useEffect, useState } from "react"
import { GetData } from "../Api/Requests"
import { DataContext } from "./CreateContext"

export function DataProvider({ children }) {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const [cartData, setCartData] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [productDetail, setProductDetail] = useState([])

  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const response = await GetData()

      setData(response)
      console.log(response)
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider
      value={{
        data,
        inputValue,
        setInputValue,
        cartCount,
        setCartCount,
        cartData,
        setCartData,
        total,
        setTotal,
        productDetail,
        setProductDetail,
        favoriteItems,
        setFavoriteItems,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
