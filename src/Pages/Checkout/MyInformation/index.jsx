import React from "react"
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
          <EmailLabel htmlFor="FirstName">First Name</EmailLabel>
          <EmailInput type="text" id="FirstName" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <EmailLabel htmlFor="LastName">Last Name</EmailLabel>
          <EmailInput type="text" id="LastName" />
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
