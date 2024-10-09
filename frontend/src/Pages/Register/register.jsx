import { useState } from "react"
import { Input } from "../../Components/Input/input"
import { PasswordInput } from "../../Components/PasswordInput/passwordInput"
import { BlackButton } from "../../Components/BlackButton/blackButton"
import {
  RegisterContainer,
  RegisterTitle,
  CheckboxContainer,
  Checkbox,
  TermsText,
  TermsLink,
  StyledTextField,
} from "./styleRegister"

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
      <PasswordInput
        type={showPassword ? "text" : "password"}
        label="Confrim password"
        value={password}
        right="400px"
        onChange={handlePasswordChange}
        setVisibility={togglePasswordVisibility}
        booleanVisibility={showPassword ? "Hide" : "Show"}
        styleLabel={{ width: "41%", marginBottom: "0" }}
        styleInput={{ width: "40%", marginBottom: "0" }}
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
