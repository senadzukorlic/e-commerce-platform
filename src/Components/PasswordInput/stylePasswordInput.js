import styled from "styled-components"
export const StyledLabel = styled.label`
  display: flex;
  text-align: start;
  padding: 5px;
  font-size: 15px;
`

export const StyledInput = styled.input`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 0px;
  padding-left: 7px;
`
export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const PasswordToggle = styled.button`
  position: absolute;
  right: ${(props) => props.right || "90px"};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`
