import { Route, Redirect } from "react-router-dom"
import { isAuthenticated } from "./auth" // Putanja do vaše auth funkcije

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)

export default PrivateRoute
