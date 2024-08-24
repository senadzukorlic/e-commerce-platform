import { useState } from "react"
import { Input } from "../../Components/Input"
import { PasswordInput } from "../../Components/PasswordInput"
import { BlackButton } from "../../Components/BlackButton"
import {
  RegisterContainer,
  RegisterTitle,
  CheckboxContainer,
  Checkbox,
  TermsText,
  TermsLink,
  StyledTextField,
} from "./style"

export function Register() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [date, setDate] = useState("")

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <RegisterContainer>
      <RegisterTitle>Become a JacpiStore member</RegisterTitle>

      <Input
        type="text"
        labelName="Email"
        styleInput={{ width: "40%" }}
        styleLabel={{ width: "41%" }}
      />

      <PasswordInput
        type={showPassword ? "text" : "password"}
        label="Create a password"
        value={password}
        right="400px"
        onChange={handlePasswordChange}
        setVisibility={togglePasswordVisibility}
        booleanVisibility={showPassword ? "Hide" : "Show"}
        styleLabel={{ width: "41%", marginBottom: "0" }}
        styleInput={{ width: "40%", marginBottom: "0" }}
      />

      <StyledTextField
        label="Date of Birth"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          width: "41%",
          height: "40px",
          marginTop: "20px",
          marginBottom: "20px",
          "& .MuiInputBase-root": {
            borderRadius: 0,
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "black",
              borderRadius: "3px",
            },
          },
        }}
      />

      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <p>
          Yes, email me my member rewards, special invites, trend alerts, and
          more.
        </p>
      </CheckboxContainer>

      <TermsText>
        By clicking ‘Become a member’, I agree to the H&M Membership
        <TermsLink href="/dsafsa">Terms and conditions.</TermsLink>
      </TermsText>

      <BlackButton buttonName="Become a  member" width={{ width: "40%" }} />
    </RegisterContainer>
  )
}
