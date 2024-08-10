import styled from "styled-components"
import { Box, Modal } from "@mui/material"
import { Link } from "react-router-dom"

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledBox = styled(Box)`
  background-color: whitesmoke;
  box-shadow: 24;
  width: 500px;
  padding: 16px;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const StyledHeader = styled.h3`
  margin-bottom: 5px;
`

export const StyledParagraph = styled.p`
  display: flex;
  text-align: center;
  margin-top: 5px;
  font-size: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const StyledLabel = styled.label`
  display: flex;
  text-align: start;
  padding: 5px;
  width: 71%;
  font-size: 15px;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 71%;
  margin-top: 10px;
  gap: 10px;
`

export const ForgotPassword = styled.p`
  width: 50%;
  font-size: 15px;
`

export const ForgotLink = styled(Link)`
  color: black;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71%;
  margin-top: 10px;
  gap: 10px;
`
