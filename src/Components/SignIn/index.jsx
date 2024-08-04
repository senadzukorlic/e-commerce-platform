import React from "react"
import { useState } from "react"
import { Modal, Box, Typography, TextField } from "@mui/material"
import {
  SignInButton,
  CheckoutButton,
} from "../../Pages/ShoppingCart/CheckoutCard/CheckoutCardStyled"

export function LogIn({ open, handleClose }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 24,
          width: "500px",

          backgroundColor: "whitesmoke",
          // Omogućava skrolovanje unutar Box-a
          padding: "16px",
          // Pozicionira Box u odnosu na modal
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Sign In</h3>
          <p style={{ display: "flex", textAlign: "center" }}>
            Become a Member — you'll enjoy exclusive deals, offers, invites and
            rewards.
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <label
              htmlFor="email"
              style={{
                display: "flex",
                textAlign: "start",
                //   backgroundColor: "red",
                padding: "5px",
                width: "71%",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{
                width: "70%",
                height: "40px",
                border: "1px solid #ccc",
                borderRadius: "0px",
                //   backgroundColor: "red",
              }}
            />
            <label
              htmlFor="password"
              style={{
                display: "flex",
                textAlign: "start",
                //   backgroundColor: "red",
                padding: "5px",
                width: "71%",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{
                width: "70%",
                height: "40px",
                border: "1px solid #ccc",
                borderRadius: "0px",
                //   backgroundColor: "red",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "71%",
              marginTop: "10px",
              gap: "10px",
            }}
          >
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1">Remember me</label>
            <p style={{ marginLeft: "auto" }}>Forgot password?</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "71%",
              marginTop: "10px",
              gap: "10px",
            }}
          >
            <CheckoutButton>Sign In</CheckoutButton>
            <SignInButton>Become a member</SignInButton>
          </div>
        </form>
      </Box>
    </Modal>
  )
}
