import NavBar from "./Components/NavBar/navBar"
import { GlobalStyles } from "./Styles/globalStyles"
import { RoutesComponent } from "./Routes/routes"

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <RoutesComponent />
    </>
  )
}

export default App
