import React from "react"
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material"
import { Box } from "@mui/system"

const countries = [
  { label: "Serbia", code: "+381" },
  { label: "Bosnia", code: "+387" },
  { label: "Croatia", code: "+385" },
]

function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = React.useState(countries[0])
  const [phoneNumber, setPhoneNumber] = React.useState("")

  const handleCountryChange = (event) => {
    const country = countries.find((c) => c.label === event.target.value)
    setSelectedCountry(country)
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box display="flex" alignItems="center" flexDirection="column">
        <FormControl
          variant="outlined"
          style={{ width: "75%", borderRadius: "0px" }}
        >
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={selectedCountry.label}
            onChange={handleCountryChange}
            label="Country"
            style={{ borderRadius: "0px" }}
          >
            {countries.map((country) => (
              <MenuItem key={country.label} value={country.label}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
          <br />
        </FormControl>
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          InputProps={{
            startAdornment: <div>{selectedCountry.code}</div>,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0px",
            },
          }}
        />
      </Box>
    </div>
  )
}

export default PhoneInput
