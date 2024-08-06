import React from "react"
import {
  ForgotPasswordForm,
  ForgotPasswordHeader,
  ForgotPasswordParagraph,
  InputContainer,
  EmailLabel,
  EmailInput,
  SubmitContainer,
  Submit,
} from "./style"

function ForgotPassword() {
  return (
    <ForgotPasswordForm>
      <ForgotPasswordHeader>Forgot password?</ForgotPasswordHeader>
      <ForgotPasswordParagraph>
        Please enter the email address used to create your account, and we'll
        send you a link to reset your password.
      </ForgotPasswordParagraph>
      <InputContainer>
        <EmailLabel htmlFor="email">Email</EmailLabel>
        <EmailInput type="text" id="email" />
        <SubmitContainer>
          <Submit type="submit">Submit</Submit>
        </SubmitContainer>
      </InputContainer>
    </ForgotPasswordForm>
  )
}

export default ForgotPassword
