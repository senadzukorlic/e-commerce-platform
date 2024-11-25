import NavBar from "./Components/NavBar/navBar"
import { GlobalStyles } from "./Styles/globalStyles"
import { RoutesComponent } from "./Routes/routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" // ili "light", "dark"
        // style={{ backgroundColor: "#333", color: "##e4bc67" }} // Inline stil
      />
      <NavBar />
      <RoutesComponent />
    </>
  )
}

export default App
