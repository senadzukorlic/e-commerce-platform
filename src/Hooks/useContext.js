import { useContext } from "react"
import { DataContext } from "../Context/context"

export const useDataContext = () => {
  return useContext(DataContext)
}
