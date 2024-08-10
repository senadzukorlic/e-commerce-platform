import React from "react"
import { DataContext } from "../../Context/CreateContext"
import { useContext } from "react"
export function Favorite() {
  const { favoriteItems } = useContext(DataContext)
  return (
    <div>
      <h1>Favorite</h1>
      <h3>Welcome</h3>
      {favoriteItems.map((items) => (
        <div key={items.id}>
          <img
            style={{ width: "150px", height: "150px" }}
            src={items.images[0]}
          />
        </div>
      ))}
    </div>
  )
}
