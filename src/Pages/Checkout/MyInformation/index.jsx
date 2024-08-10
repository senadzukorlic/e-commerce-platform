import React from "react"
import { EmailInput } from "../../../Components/EmailInput/index"

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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <EmailInput
            styleInput={{ width: "70%" }}
            styleLabel={{ width: "71%" }}
          />
          <EmailInput
            styleInput={{ width: "70%" }}
            styleLabel={{ width: "71%" }}
          />
        </div>
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
