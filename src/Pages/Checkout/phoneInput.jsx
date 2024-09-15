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
