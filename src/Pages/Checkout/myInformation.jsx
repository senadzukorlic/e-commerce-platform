import React from "react"
import { Input } from "../../Components/Input/index"
import PhoneInput from "./phoneInput"
import {
  Container,
  InnerContainer,
  Header,
  Row,
  Column,
  PhoneInputWrapper,
} from "./styleMyInformation"

export function MyInformation() {
  return (
    <Container>
      <InnerContainer>
        <Header>My Information</Header>
        <Input
          labelName="Email"
          type="text"
          styleInput={{ width: "90%" }}
          styleLabel={{ width: "92%" }}
        />
        <Row>
          <Column>
            <Input
              labelName="First name"
              type="text"
              styleInput={{ width: "81%" }}
              styleLabel={{ width: "85%" }}
            />
          </Column>
          <Column>
            <Input
              labelName="Last name"
              type="text"
              styleInput={{ width: "81%" }}
              styleLabel={{ width: "85%" }}
            />
          </Column>
        </Row>
      </InnerContainer>

      <InnerContainer>
        <Header>Billing Address</Header>
        <Input
          labelName="Address"
          type="text"
          styleInput={{ width: "90%" }}
          styleLabel={{ width: "92%" }}
        />
        <Row>
          <Column>
            <Input
              labelName="Town/City"
              type="text"
              styleInput={{ width: "81%" }}
              styleLabel={{ width: "85%" }}
            />
          </Column>
          <Column>
            <Input
              labelName="Postal code"
              type="text"
              styleInput={{ width: "81%" }}
              styleLabel={{ width: "85%" }}
            />
          </Column>
        </Row>
        <PhoneInputWrapper>
          <PhoneInput />
        </PhoneInputWrapper>
      </InnerContainer>
    </Container>
  )
}
