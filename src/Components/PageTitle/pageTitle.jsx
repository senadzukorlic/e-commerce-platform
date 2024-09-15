import styled from "styled-components"

const H1Page = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  color: black;
  margin-top: 30px;
  margin-bottom: 0;
`

export function PageTitle({ title }) {
  return <H1Page>{title}</H1Page>
}
