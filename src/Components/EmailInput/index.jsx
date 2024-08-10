import { StyledLabel, StyledInput } from "./style"

export function EmailInput({
  value,
  onChange,
  styleLabel,
  styleInput,
  labelName,
}) {
  return (
    <>
      <StyledLabel style={styleLabel} htmlFor="email">
        {labelName}
      </StyledLabel>
      <StyledInput
        style={styleInput}
        type="email"
        id="email"
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}
