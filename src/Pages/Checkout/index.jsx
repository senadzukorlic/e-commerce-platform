import { CheckoutCard } from "../ShoppingCart/checkoutCard"
import { MyInformation } from "./myInformation"

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
