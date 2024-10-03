import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#e4bc67", // Žuta boja kao primarna
    },
    secondary: {
      main: "#FFFFFF", // Bela boja kao sekundarna
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "none", // Osnovna boja okvira
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "none", // Boja okvira pri hover-u
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(128, 128, 128, 0.7)", // Boja okvira pri fokusu
          },
        },
      },
    },
  },
})

export default theme
