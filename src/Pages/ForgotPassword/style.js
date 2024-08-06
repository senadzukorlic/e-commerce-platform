// ForgotPasswordStyles.js
import styled from "styled-components"
import { SubmitButton } from "../../Components/Buttons/SubmitButtons"

export const ForgotPasswordForm = styled.form`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ForgotPasswordHeader = styled.h1`
  margin: 0;
`

export const ForgotPasswordParagraph = styled.p`
  width: 50%;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const EmailLabel = styled.label`
  width: 51%;
  display: flex;
  justify-content: start;
  align-items: start;
  padding-bottom: 10px;
`

export const EmailInput = styled.input`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  border-radius: 0px;
  border: 1px solid black;
`

export const SubmitContainer = styled.div`
  width: 51%;
  display: flex;
  justify-content: start;
  align-items: start;
  padding-top: 20px;
`

export const Submit = styled(SubmitButton)`
  width: 150px;
  background-color: red;
`
