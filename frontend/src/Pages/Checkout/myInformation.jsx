import React from "react"
import { useState, useEffect } from "react"
import { Input } from "../../Components/Input/input"
import SelectInput from "../../Components/SelectInput/selectInput"
import { paymentMethods } from "../../Config/paymentMethods"
import { useParams } from "react-router-dom"
import {
  Container,
  InnerContainer,
  Header,
  Row,
  Column,
  PhoneInputWrapper,
} from "./styleMyInformation"
import axios from "axios"
import PhoneInputComponent from "./phoneInput"
import { BlackButton } from "../../Components/blackButton/blackButton"

export function MyInformation() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(
    paymentMethods[0].value
  )

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value)
  }

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const { cartId } = useParams()
  console.log("MyInformation cartId from params:", cartId)
  useEffect(() => {
    if (!cartId) {
      console.log("Nema cartId-a!")
      // Možda redirect na cart stranu
    }
  }, [cartId])

  const handleCreateOrder = async () => {
    try {
      if (
        !cartId ||
        !email ||
        !firstName ||
        !lastName ||
        !address ||
        !city ||
        !postalCode ||
        !phoneNumber
      ) {
        console.error("Missing required fields")
        // Show error to user
        return
      }
      const token = localStorage.getItem("token")
      if (!token) {
        console.error("No authentication token found")
        return
      }
      const response = await axios.post(
        `http://localhost:8080/create-order/${cartId}`,
        {
          email,
          firstName: firstName,
          lastName,
          city,
          postalCode,
          address,
          phoneNumber: phoneNumber.replace(/\D/g, ""),
          paymentMethod: selectedPaymentMethod,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      console.log("Order created successfully:", response.data)
    } catch (error) {
      console.log("Nije kreirana narudzbina", error)
    }
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Row>
          <Column>
            <Input
              labelName="First name"
              type="text"
              styleInput={{ width: "81%" }}
              styleLabel={{ width: "85%" }}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Column>
          <Column>
            <Input
              labelName="Last name"
              type="text"
              styleInput={{ width: "81%" }}
              styleLabel={{ width: "85%" }}
              onChange={(e) => setLastName(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value)}
        />
        <Row>
          <Column>
            <Input
              labelName="Town/City"
              type="text"
              styleInput={{ width: "81%" }}
              styleLabel={{ width: "85%" }}
              onChange={(e) => setCity(e.target.value)}
            />
          </Column>
          <Column>
            <Input
              labelName="Postal code"
              type="text"
              styleInput={{ width: "81%" }}
              styleLabel={{ width: "85%" }}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Column>
        </Row>
        <PhoneInputWrapper>
          <PhoneInputComponent
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
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
      <InnerContainer>
        <BlackButton
          buttonName="Confirm Order"
          width={{ width: "90%" }}
          onClick={handleCreateOrder}
        />
      </InnerContainer>
    </Container>
  )
}
