import React from "react"
import { Input } from "../../Components/Input/index"
import { RowDiv } from "../../Components/RowDiv"
import { ColumnDiv } from "../../Components/ColumnDiv"
import PhoneInput from "./phoneInput"
export function MyInformation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <RowDiv>
          <ColumnDiv>
            {" "}
            <Input
              labelName="Name"
              type="text"
              styleInput={{ width: "70%" }}
              styleLabel={{ width: "71%" }}
            />
          </ColumnDiv>

          <ColumnDiv>
            <Input
              labelName="Surname"
              type="text"
              styleInput={{ width: "70%" }}
              styleLabel={{ width: "71%" }}
            />
          </ColumnDiv>
        </RowDiv>
      </div>
      <div>
        <input type="date" />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "50px" }}
      >
        <PhoneInput />
      </div>
    </div>
  )
}
