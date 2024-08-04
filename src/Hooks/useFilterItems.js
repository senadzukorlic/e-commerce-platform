import { useMemo } from "react"

export const useFilterItems = (data, activeCategory) => {
  return useMemo(() => {
    return data.filter((item) =>
      activeCategory.includes(item.category.toLowerCase())
    )
  }, [data, activeCategory])
}
