import { CheckoutCard } from "../ShoppingCart/CheckoutCard/CheckoutCard"
import { MyInformation } from "./MyInformation"

export function Checkout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>Checkout</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <MyInformation />
        <CheckoutCard />
      </div>
    </div>
  )
}
