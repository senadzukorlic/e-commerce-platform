import React from "react"
import {
  ForgotPasswordForm,
  ForgotPasswordHeader,
  ForgotPasswordParagraph,
  InputContainer,
  SubmitContainer,
  Submit,
} from "./style"
import { EmailInput } from "../../Components/EmailInput"

function ForgotPassword() {
  return (
    <ForgotPasswordForm>
      <ForgotPasswordHeader>Forgot password?</ForgotPasswordHeader>
      <ForgotPasswordParagraph>
        Please enter the email address used to create your account, and we'll
        send you a link to reset your password.
      </ForgotPasswordParagraph>
      <InputContainer>
        <EmailInput
          styleInput={{ width: " 50%" }}
          styleLabel={{ width: "51%" }}
        />
        <SubmitContainer>
          <Submit type="submit">Submit</Submit>
        </SubmitContainer>
      </InputContainer>
    </ForgotPasswordForm>
  )
}

export default ForgotPassword
