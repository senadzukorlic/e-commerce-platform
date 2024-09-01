import styled from "styled-components"
import { TextField } from "@mui/material"

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RegisterTitle = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: gray;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Checkbox = styled.input`
  width: 17px;
  height: 17px;
`

export const TermsText = styled.p`
  color: #707070;
  font-size: 13px;
  margin-top: 10px;
`

export const TermsLink = styled.a`
  color: #707070;
  font-size: 14px;
`

export const StyledTextField = styled(TextField)`
  width: 41%;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;

  .MuiInputBase-root {
    border-radius: 0;
  }

  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: black;
      border-radius: 3px;
    }
  }
`
