import React from "react"
import { EmailInput } from "../../../Components/EmailInput/index"
import { RowDiv } from "../../../Components/RowDiv"
import { ColumnDiv } from "../../../Components/ColumnDiv"
import PhoneInput from "./PhoneInput"
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
            <EmailInput
              labelName="Name"
              styleInput={{ width: "70%" }}
              styleLabel={{ width: "71%" }}
            />
          </ColumnDiv>

          <ColumnDiv>
            <EmailInput
              labelName="Surname"
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
