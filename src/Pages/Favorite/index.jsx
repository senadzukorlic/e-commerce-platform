import React from "react"
import { useDataContext } from "../../Hooks/useContext"
import { BlackButton } from "../../Components/BlackButton"
import { RowDiv } from "../../Components/RowDiv/index"
import { ColumnDiv } from "../../Components/ColumnDiv/index"
import { Input } from "../../Components/Input"
export function Favorite() {
  const { favoriteItems } = useDataContext()
  return (
    <div style={{ height: "110vh" }}>
      <h1
        style={{
          display: "flex",
          flex: "column",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        Favorites
      </h1>
      <RowDiv>
        {favoriteItems.map((items) => (
          <div
            style={{
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "460px",
              width: "270px",
            }}
            key={items.id}
          >
            <img
              style={{
                width: "270px",
                height: "300px",
                background:
                  "linear-gradient(to right, rgb(190, 190, 190), rgb(210, 210, 210), rgb(190, 190, 190))",
              }}
              src={items.images[0]}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                width: "100%",
                margin: "0px",
              }}
            >
              <h5 style={{ margin: "3px 0" }}>{items.title}</h5>
              <h6 style={{ margin: "3px 0" }}>{items.price}</h6>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                width: "100%",
              }}
            >
              <Input styleInput={{ width: "95%" }} type="text" />
              <BlackButton buttonName="Add to bag" width={{ width: "100%" }} />
            </div>
          </div>
        ))}
      </RowDiv>
    </div>
  )
}
