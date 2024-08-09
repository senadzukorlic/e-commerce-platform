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
  // Dodaj još država po potrebi
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
    <div>
      <Box display="flex" alignItems="center" flexDirection="column">
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          style={{ flexGrow: 1, marginRight: 10 }}
          InputProps={{
            startAdornment: (
              <div style={{ marginRight: 5 }}>{selectedCountry.code}</div>
            ),
          }}
        />
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={selectedCountry.label}
            onChange={handleCountryChange}
            label="Country"
          >
            {countries.map((country) => (
              <MenuItem key={country.label} value={country.label}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default PhoneInput
