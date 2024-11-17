import React from "react"
import {
  StyledModal,
  StyledBox,
  StyledForm,
  HeaderContainer,
  StyledHeader,
  StyledParagraph,
  ButtonsContainer,
} from "../LogIn/LogInStyle"
import { BlackButton } from "../blackButton/blackButton"
import { OutlinedButton } from "../OutlinedButton/outlinedButton"
export function LogOutModal({ open, handleClose }) {
  const handleLogOut = () => {
    localStorage.removeItem("token")
    handleClose()
    window.location.reload()
  }

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <StyledForm onSubmit={handleLogOut}>
          <HeaderContainer>
            <StyledHeader>Log Out</StyledHeader>
            <StyledParagraph>Are you sure you want to log out?</StyledParagraph>
          </HeaderContainer>
          <ButtonsContainer>
            <OutlinedButton type="submit" buttonName="Yes"></OutlinedButton>
            <BlackButton onClick={handleClose} buttonName="No"></BlackButton>
          </ButtonsContainer>
        </StyledForm>
      </StyledBox>
    </StyledModal>
  )
}
