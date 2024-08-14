import { useContext } from "react"
import { DataContext } from "../Context"

export const useDataContext = () => {
  return useContext(DataContext)
}
