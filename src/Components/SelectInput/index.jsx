import React from "react"

import { StyledLabel, StyledSelect, CustomSelectWrapper } from "./style"

function SelectInput({
  id,
  label,
  options,
  value,
  onChange,
  justifyContent,
  align,
  width,
}) {
  return (
    <CustomSelectWrapper
      justifyContent={justifyContent}
      align={align}
      width={width}
    >
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledSelect id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </CustomSelectWrapper>
  )
}

export default SelectInput
