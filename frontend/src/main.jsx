import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { BrowserRouter as Router } from "react-router-dom"
import { DataProvider } from "./Context/context.jsx"
import theme from "./Styles/theme.js"
import { ThemeProvider } from "@mui/material/styles"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>
)
