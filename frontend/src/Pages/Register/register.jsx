// import { useState } from "react"
// import { Input } from "../../Components/Input/input"
// import { PasswordInput } from "../../Components/PasswordInput/passwordInput"
// import { BlackButton } from "../../Components/BlackButton/blackButton"
// import {
//   RegisterContainer,
//   RegisterTitle,
//   CheckboxContainer,
//   Checkbox,
//   TermsText,
//   TermsLink,
// } from "./styleRegister"

// export function Register() {
//   const [password, setPassword] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const [date, setDate] = useState("")

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value)
//   }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   return (
//     <RegisterContainer>
//       <RegisterTitle>Become a JacpiStore member</RegisterTitle>

//       <Input
//         type="text"
//         labelName="Email"
//         styleInput={{ width: "40%" }}
//         styleLabel={{ width: "41%" }}
//       />

//       <PasswordInput
//         type={showPassword ? "text" : "password"}
//         label="Create a password"
//         value={password}
//         right="400px"
//         onChange={handlePasswordChange}
//         setVisibility={togglePasswordVisibility}
//         booleanVisibility={showPassword ? "Hide" : "Show"}
//         styleLabel={{ width: "41%", marginBottom: "0" }}
//         styleInput={{ width: "40%", marginBottom: "0" }}
//       />
//       <PasswordInput
//         type={showPassword ? "text" : "password"}
//         label="Confrim password"
//         value={password}
//         right="400px"
//         onChange={handlePasswordChange}
//         setVisibility={togglePasswordVisibility}
//         booleanVisibility={showPassword ? "Hide" : "Show"}
//         styleLabel={{ width: "41%", marginBottom: "0" }}
//         styleInput={{ width: "40%", marginBottom: "0" }}
//       />

//       <CheckboxContainer>
//         <Checkbox type="checkbox" />
//         <p>
//           Yes, email me my member rewards, special invites, trend alerts, and
//           more.
//         </p>
//       </CheckboxContainer>

//       <TermsText>
//         By clicking ‘Become a member’, I agree to the H&M Membership
//         <TermsLink href="/dsafsa">Terms and conditions.</TermsLink>
//       </TermsText>

//       <BlackButton buttonName="Become a  member" width={{ width: "40%" }} />
//     </RegisterContainer>
//   )
// }
import { useState } from "react"
import axios from "axios"
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
} from "./styleRegister"

export function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
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
      setError(err.response.data.message)
    }
  }

  return (
    <RegisterContainer>
      <RegisterTitle>Become a JacpiStore member</RegisterTitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          labelName="Email"
          value={email}
          onChange={handleEmailChange}
          styleInput={{ width: "40%" }}
          styleLabel={{ width: "41%" }}
        />
        <PasswordInput
          type={showPassword ? "text" : "password"}
          label="Create a password"
          value={password}
          onChange={handlePasswordChange}
          setVisibility={togglePasswordVisibility}
          booleanVisibility={showPassword ? "Hide" : "Show"}
          styleLabel={{ width: "41%", marginBottom: "0" }}
          styleInput={{ width: "40%", marginBottom: "0" }}
        />
        <PasswordInput
          type={showPassword ? "text" : "password"}
          label="Confirm password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          setVisibility={togglePasswordVisibility}
          booleanVisibility={showPassword ? "Hide" : "Show"}
          styleLabel={{ width: "41%", marginBottom: "0" }}
          styleInput={{ width: "40%", marginBottom: "0" }}
        />
        {error && <p>{error}</p>}
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
        <BlackButton
          buttonName="Become a member"
          width={{ width: "40%" }}
          onClick={handleSubmit}
        />
      </form>
    </RegisterContainer>
  )
}
