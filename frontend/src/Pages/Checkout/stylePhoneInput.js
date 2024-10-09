import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
`

export const CustomPhoneInput = styled.div`
  .form-control {
    background-color: white;
    height: 40px;
    border-radius: 0;
    border: 1px solid #ccc;
    width: 100%;
  }

  .phone-input {
    width: 100%;
  }
`
