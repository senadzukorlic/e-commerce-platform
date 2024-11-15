import React, { useState } from "react"
import axios from "axios"
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
} from "./styleSignIn"

import { PasswordInput } from "../PasswordInput/passwordInput"
import { Input } from "../Input/input"
import { OutlinedButton } from "../OutlinedButton/outlinedButton"
import { BlackButton } from "../blackButton/blackButton"
import { Link } from "react-router-dom"

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

  const handleSubmit = async (event) => {
    event.preventDefault() //sprecava osvezavanje stranice prilikom submita
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        //Saojemo zahtev bekendu za prijavu korisnika sa emailom i lozinkom,server ce proveriti da li korisnik sa tim podacima postoji u bazi podataka,ako postoji,server ce generisati token i poslati ga korisniku
        email,
        password,
      })
      localStorage.setItem("token", response.data.token) //Kada dobijemo token od servera,smestamo ga u localStorage,a vrednost tokena se nalazi u response.data.token
      handleClose() //Funckija koja se koristi da se modal zatvori nakon uspesne prijave
      window.location.reload() // Osvježite stranicu kako bi se NavBar ponovno renderirao,te se prikazale privilige koje korisnik ima nakon prijave
      console.log(response.data.token)
      // if(response.data.token)
    } catch (err) {
      console.log("ERROR", err)
    }
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
            <Input
              labelName="Email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              styleLabel={{ width: "70%" }}
              styleInput={{ width: "71%" }}
            />
            <PasswordInput
              type={showPassword ? "text" : "password"}
              label="Password"
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
              onClick={handleSubmit}
            />
            <Link to="/signup">
              <OutlinedButton
                width={{ width: "330px" }}
                buttonName="Become a member"
                onClick={handleForgotPasswordClick}
              />
            </Link>
          </ButtonsContainer>
        </StyledForm>
      </StyledBox>
    </StyledModal>
  )
}
