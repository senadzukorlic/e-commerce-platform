import { useEffect, useState } from "react"
import { GetData, DisplayUpdatedProducts } from "../Api/Requests"
import { DataContext } from "./CreateContext"
// import { SaleContext } from "./CreateContext"

export function DataProvider({ children }) {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [cartCount, setCartCount] = useState(0)
  const [cartData, setCartData] = useState([])

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
        data,
        inputValue,
        setInputValue,
        cartCount,
        setCartCount,
        cartData,
        setCartData,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
// export function CartData({ children }) {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     async function fetchData() {
//       const response = await DisplayUpdatedProducts()
//       setData(response)
//     }
//     fetchData()
//   }, [])

//   return (
//     <SaleContext.Provider value={{ data }}>{children}</SaleContext.Provider>
//   )
// }
