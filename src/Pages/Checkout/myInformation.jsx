import React from "react"
import { Input } from "../../Components/Input/index"
import PhoneInput from "./phoneInput"
import SelectInput from "../../Components/SelectInput"
import { paymentMethods } from "../../Config/paymentMethods"
import {
  Container,
  InnerContainer,
  Header,
  Row,
  Column,
  PhoneInputWrapper,
} from "./styleMyInformation"
import { StyledLabel } from "../../Components/Input/style"

export function MyInformation() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(
    paymentMethods[0].value
  )

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value)
  }

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

      <InnerContainer>
        <Header>Payment </Header>

        <SelectInput
          label="Select Payment Method"
          justiflyContent="center"
          align="center"
          width="90%"
          id="payment-method-select"
          options={paymentMethods}
          value={selectedPaymentMethod}
          onChange={handlePaymentMethodChange}
        />
      </InnerContainer>
    </Container>
  )
}
