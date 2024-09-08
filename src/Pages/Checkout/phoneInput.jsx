// import React from "react"
// import { StyledLabel } from "../../Components/Input/styleInput"
// import "react-phone-input-2/lib/style.css"
// import PhoneInput from "react-phone-input-2"

// function PhoneInputComponent() {
//   const [phoneNumber, setPhoneNumber] = React.useState("")

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         // backgroundColor: "red",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",

//           width: "92%",
//         }}
//       >
//         <StyledLabel htmlFor="phone-number">Phone Number</StyledLabel>

//         <PhoneInput
//           value={phoneNumber}
//           onChange={(value) => setPhoneNumber(value)}
//           country={"rs"}
//           inputStyle={{
//             width: "100%",
//             height: "40px",
//             borderRadius: "0px",
//           }}
//           containerStyle={{
//             width: "100%",
//           }}
//         />
//       </div>
//     </div>
//   )
// }

// export default PhoneInputComponent

import React from "react"
import { StyledLabel } from "../../Components/Input/styleInput"
import "react-phone-input-2/lib/style.css"
import PhoneInput from "react-phone-input-2"
import { Wrapper, InnerWrapper, CustomPhoneInput } from "./stylePhoneInput"

function PhoneInputComponent() {
  const [phoneNumber, setPhoneNumber] = React.useState("")

  return (
    <Wrapper>
      <InnerWrapper>
        <StyledLabel htmlFor="phone-number">Phone Number</StyledLabel>

        <CustomPhoneInput>
          <PhoneInput
            value={phoneNumber}
            onChange={(value) => setPhoneNumber(value)}
            country={"rs"}
            inputStyle={{
              height: "40px",
              borderRadius: "0px",
              // backgroundColor: "white",
              // border: "1px solid #ccc",
            }}
            containerStyle={{
              width: "100%",
            }}
          />
        </CustomPhoneInput>
      </InnerWrapper>
    </Wrapper>
  )
}

export default PhoneInputComponent
