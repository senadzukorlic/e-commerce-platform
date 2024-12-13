import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  width: 40%;
  justify-content: start;
  align-items: center;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-radius: 5px;
  border: 1px solid lightgray;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`

export const Header = styled.h4`
  margin: 0;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const PhoneInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
