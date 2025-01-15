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
import { useNavigate } from "react-router-dom"

export function ShoppingCart() {
  const { cartData, setCartCount, ownCartProducts, setOwnCartProducts } =
    useDataContext()

  const [productQuantityAndTotalPrice, setProductQuantityAndTotalPrice] =
    useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const [cartId, setCartId] = useState(null)

  const handleFetchOwnProducts = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(
        "http://localhost:8080/admin/my-products/get-cart",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      console.log("Cart response:", response.data)
      const extractProd = response.data.cart.CartProducts.map(
        (cp) => cp.product
      )
      const prodQuantityAndPrice = response.data.cart.CartProducts
      const totalPriceOfAllProducts = response.data.cart.totalPrice
      setCartId(response.data.cart.id)
      setTotalPrice(totalPriceOfAllProducts)
      setProductQuantityAndTotalPrice(prodQuantityAndPrice)
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

  const updateQuantity = async (productid, quantity) => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.patch(
        `http://localhost:8080/admin/my-products/update-product-quantity/${productid}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (error) {
      console.log("Nije promenjena kolicina", error)
    }
    await handleFetchOwnProducts()
  }

  const navigate = useNavigate()

  const handleContinueToCheckout = () => {
    // Dodajte proveru
    console.log("Cart ID:", cartId)
    if (!cartId) {
      console.log("Nema cartId-a!")
      return
    }
    navigate("/checkout", {
      state: { cartId },
    })
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
                productQuantityAndTotalPrice={productQuantityAndTotalPrice}
                ownCartProducts={ownCartProducts}
                handleDeleteOwnProduct={handleDeleteOwnProduct}
                updateQuantity={updateQuantity}
              />
            </StyledItemCardDiv>
            <CheckoutCard
              totalPrice={totalPrice}
              handleContinueToCheckout={handleContinueToCheckout}
              cartId={cartId}
            />
          </ItemAndCheckoutDiv>
        </ParentDiv>
      )}
    </>
  )
}
