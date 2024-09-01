import { StyledLabel, StyledInput } from "./styleInput"

export function Input({
  value,
  onChange,
  styleLabel,
  styleInput,
  labelName,
  type,
}) {
  return (
    <>
      <StyledLabel style={styleLabel} htmlFor="email">
        {labelName}
      </StyledLabel>
      <StyledInput
        style={styleInput}
        type={type}
        id="email"
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}
