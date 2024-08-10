import {
  StyledLabel,
  PasswordContainer,
  StyledInput,
  PasswordToggle,
} from "./style"

export function PasswordInput({
  value,
  onChange,
  type,
  setVisibility,
  booleanVisibility,
  styleLabel,
  styleInput,
}) {
  return (
    <>
      <StyledLabel style={styleLabel} htmlFor="password">
        Password
      </StyledLabel>
      <PasswordContainer>
        <StyledInput
          style={styleInput}
          type={type}
          id="password"
          value={value}
          onChange={onChange}
          required
        />
        <PasswordToggle type="button" onClick={setVisibility}>
          {booleanVisibility ? "Hide" : "Show"}
        </PasswordToggle>
      </PasswordContainer>
    </>
  )
}
