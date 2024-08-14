import styled from "styled-components"

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 5px;
  font-size: 15px;
  margin-bottom: 0px;
`

export const StyledSelect = styled.select`
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 0px;
  padding-left: 7px;
  width: ${(props) => props.width || "100%"};
  box-sizing: border-box;
`

export const CustomSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
`
