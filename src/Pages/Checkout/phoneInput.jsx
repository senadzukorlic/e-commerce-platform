import React from "react"
import { RowDiv } from "../../Components/RowDiv"
import { ColumnDiv } from "../../Components/ColumnDiv"
import { StyledLabel, StyledInput } from "../../Components/Input/style"
import SelectInput from "../../Components/SelectInput"
import styled from "styled-components"
import { countries } from "../../Config/countries"

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Prefix = styled.span`
  position: absolute;
  font-size: 14px;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  pointer-events: none;
  line-height: 40px;
`

const InputWithPrefix = styled(StyledInput)`
  padding-left: 50px;
  width: 85%;
  box-sizing: border-box;
  line-height: 40px;
`

function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0])
  const [phoneNumber, setPhoneNumber] = React.useState("")

  const handleCountryChange = (event) => {
    const country = countries.find((c) => c.label === event.target.value)
    setSelectedCountry(country)
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  return (
    <RowDiv width="100%">
      <ColumnDiv width="50%">
        <SelectInput
          label="Country"
          id="country-select"
          width="85%"
          options={countries.map((country) => ({
            label: country.label,
            value: country.label,
          }))}
          value={selectedCountry.label}
          onChange={handleCountryChange}
        />
      </ColumnDiv>

      <ColumnDiv width="50%">
        <StyledLabel htmlFor="phone-number">Phone Number</StyledLabel>
        <InputWrapper>
          <Prefix>{selectedCountry.code}</Prefix>
          <InputWithPrefix
            id="phone-number"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </InputWrapper>
      </ColumnDiv>
    </RowDiv>
  )
}

export default PhoneInput
