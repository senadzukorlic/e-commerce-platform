import React from "react"
import {
  ForgotPasswordForm,
  ForgotPasswordHeader,
  ForgotPasswordParagraph,
  InputContainer,
  SubmitContainer,
} from "./styleForgotPassword"
import { Input } from "../../Components/Input/input"
import { BlackButton } from "../../Components/BlackButton/blackButton"

function ForgotPassword() {
  return (
    <ForgotPasswordForm>
      <ForgotPasswordHeader>Forgot password?</ForgotPasswordHeader>
      <ForgotPasswordParagraph>
        Please enter the email address used to create your account, and we'll
        send you a link to reset your password.
      </ForgotPasswordParagraph>
      <InputContainer>
        <Input
          type="text"
          labelName="Email"
          styleInput={{ width: " 50%" }}
          styleLabel={{ width: "51%" }}
        />
        <SubmitContainer>
          <BlackButton
            type="submit"
            buttonName="Submit"
            width={{ width: "20%" }}
          />
        </SubmitContainer>
      </InputContainer>
    </ForgotPasswordForm>
  )
}

export default ForgotPassword
