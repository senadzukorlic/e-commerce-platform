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
  StyledInput,
  PasswordContainer,
  PasswordToggle,
  OptionsContainer,
  ForgotPassword,
  ButtonsContainer,
  ForgotLink,
} from "./style"
import {
  SignInButton,
  CheckoutButton,
} from "../../Pages/ShoppingCart/CheckoutCard/CheckoutCardStyled"

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
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <PasswordContainer>
              <StyledInput
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <PasswordToggle type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </PasswordToggle>
            </PasswordContainer>
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
            <CheckoutButton type="submit">Sign In</CheckoutButton>
            <SignInButton>Contine as guest</SignInButton>
          </ButtonsContainer>
        </StyledForm>
      </StyledBox>
    </StyledModal>
  )
}
