import { useEffect, useState, createContext } from "react"
import { GetData } from "../api/requests"

export const DataContext = createContext()

export function DataProvider({ children }) {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const [cartData, setCartData] = useState([])
  const [favoriteItems, setFavoriteItems] = useState([])
  const [productDetail, setProductDetail] = useState([])

  const [ownCartProducts, setOwnCartProducts] = useState([])
  const [ownProducts, setOwnProducts] = useState([])
  const [ownProductsTotal, setOwnProductsTotal] = useState(0)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const response = await GetData()

      setData(response)
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider
      value={{
        ownCartProducts,
        setOwnCartProducts,
        ownProductsTotal,
        setOwnProductsTotal,
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
        setOwnProducts,
        ownProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
