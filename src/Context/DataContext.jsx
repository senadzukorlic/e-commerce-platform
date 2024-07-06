import { createContext, useEffect, useState } from "react"
import { GetData } from "../../Api/Requests"

export const DataContext = createContext()

export function DataProvider({ children }) {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await GetData()
      setData(response)
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={{ data, inputValue, setInputValue }}>
      {children}
    </DataContext.Provider>
  )
}
