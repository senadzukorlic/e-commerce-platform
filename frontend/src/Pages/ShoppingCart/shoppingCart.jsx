import * as React from "react"
import {
  ParentDiv,
  StyledItemCardDiv,
  ItemAndCheckoutDiv,
  TitleParentDiv,
} from "./styleShoppingCart"
import { EmptyComponent } from "../../Components/empty/empty"
import { useDataContext } from "../../Hooks/useContext"
import { ItemCard } from "./itemCard"
import { CheckoutCard } from "./checkoutCard"
import { PageTitle } from "../../Components/PageTitle/pageTitle"
import axios from "axios"
import { useState, useEffect } from "react"

export function ShoppingCart() {
  const { cartData, setCartCount, ownCartProducts, setOwnCartProducts } =
    useDataContext()

  const [productQuantity, setProductQuantity] = useState(0)

  const handleFetchOwnProducts = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(
        "http://localhost:8080/admin/my-products/get-cart",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      const extractProd = response.data.cart.CartProducts.map(
        (cp) => cp.product
      )
      const prodQuantity = response.data.cart.CartProducts.map(
        (cp) => cp.quantity
      )
      setProductQuantity(prodQuantity)
      setOwnCartProducts(extractProd)
    } catch (error) {
      console.log("Nesto nije dobro", error)
    }
  }
  useEffect(() => {
    handleFetchOwnProducts()
  }, [])

  const handleDeleteOwnProduct = async (productid) => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.delete(
        `http://localhost:8080/admin/my-products/delete-product-from-cart/${productid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setCartCount((count) => {
        return count - 1
      })
    } catch (error) {
      console.log("Nije obrisan produkt iz korpe", error)
    }
    await handleFetchOwnProducts()
  }
  return (
    <>
      <PageTitle title="Shopping Cart" />
      {cartData.length === 0 && ownCartProducts.length === 0 ? (
        <EmptyComponent text="Your Shopping Cart is empty!" />
      ) : (
        <ParentDiv>
          <TitleParentDiv></TitleParentDiv>

          <ItemAndCheckoutDiv>
            <StyledItemCardDiv>
              <ItemCard
                productQuantity={productQuantity}
                ownCartProducts={ownCartProducts}
                handleDeleteOwnProduct={handleDeleteOwnProduct}
              />
            </StyledItemCardDiv>
            <CheckoutCard />
          </ItemAndCheckoutDiv>
        </ParentDiv>
      )}
    </>
  )
}
