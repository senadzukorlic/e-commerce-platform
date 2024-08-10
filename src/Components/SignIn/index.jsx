import React, { useState } from "react"
import {
  StyledModal,
  StyledBox,
  StyledForm,
  HeaderContainer,
  StyledHeader,
  StyledParagraph,
  InputContainer,
  StyledLabel,
  OptionsContainer,
  ForgotPassword,
  ButtonsContainer,
  ForgotLink,
} from "./style"

import { PasswordInput } from "../PasswordInput"
import { EmailInput } from "../EmailInput"
import { OutlinedButton } from "../OutlinedButton"
import { BlackButton } from "../BlackButton"

export function LogIn({ open, handleClose }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleForgotPasswordClick = () => {
    handleClose()
  }
  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <StyledForm onSubmit={handleSubmit}>
          <HeaderContainer>
            <StyledHeader>Sign In</StyledHeader>
            <StyledParagraph>
              Become a Member — you'll enjoy exclusive deals, offers, invites
              and rewards.
            </StyledParagraph>
          </HeaderContainer>
          <InputContainer>
            <EmailInput
              labelName="Email"
              value={email}
              onChange={handleEmailChange}
              styleLabel={{ width: "70%" }}
              styleInput={{ width: "71%" }}
            />
            <PasswordInput
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              setVisibility={togglePasswordVisibility}
              booleanVisibility={showPassword ? "Hide" : "Show"}
              styleLabel={{ width: "70%" }}
              styleInput={{ width: "71%" }}
            />
          </InputContainer>
          <OptionsContainer>
            <input type="checkbox" id="checkbox1" />
            <StyledLabel htmlFor="checkbox1">Remember me</StyledLabel>
            <ForgotPassword>
              <ForgotLink
                to="/forgot-password"
                onClick={handleForgotPasswordClick}
              >
                Forgot password?
              </ForgotLink>
            </ForgotPassword>
          </OptionsContainer>
          <ButtonsContainer>
            <BlackButton
              width={{ width: "330px" }}
              buttonName="Sign In"
              type="submit"
            />
            <OutlinedButton
              width={{ width: "330px" }}
              buttonName="Continue as guest"
            />
          </ButtonsContainer>
        </StyledForm>
      </StyledBox>
    </StyledModal>
  )
}
