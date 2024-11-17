import { useState } from "react"
import { Input } from "../../Components/Input/input"
import { PasswordInput } from "../../Components/PasswordInput/passwordInput"
import { BlackButton } from "../../Components/blackButton/blackButton"
import axios from "axios"
import {
  RegisterContainer,
  RegisterTitle,
  CheckboxContainer,
  Checkbox,
  TermsText,
  TermsLink,
} from "./createAccStyle"

export function CreateAcc() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(null)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        email,
        password,
        confirmPassword,
      })
      console.log(response.data)
      // Handle successful registration (e.g., redirect to login page)
    } catch (err) {
      console.log("Ne radi", err)
    }
  }

  return (
    <RegisterContainer>
      <RegisterTitle>Become a JacpiStore member</RegisterTitle>

      <Input
        type="text"
        labelName="Email"
        styleInput={{ width: "40%" }}
        styleLabel={{ width: "41%" }}
        onChange={handleEmailChange}
        value={email}
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
        value={confirmPassword}
        right="400px"
        onChange={handleConfirmPasswordChange}
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
        By clicking ‘Become a member’, I agree to the JacpiStore Membership
        <TermsLink href="/dsafsa">Terms and conditions.</TermsLink>
      </TermsText>

      <BlackButton
        type="submit"
        onClick={handleSubmit}
        buttonName="Become a  member"
        width={{ width: "40%" }}
      />
    </RegisterContainer>
  )
}
