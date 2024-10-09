export function addToCart({
  item,
  setCartCount,
  setCartData,
  setTotal,
  alertMessage,
  size,
}) {
  if (!size) {
    alert(alertMessage)
    return
  }

  const itemWithSize = { ...item, size }

  setCartData((prevCartData) => {
    const updatedCartData = [...prevCartData, itemWithSize]
    setCartCount((currentValue) => currentValue + 1)

    const total = updatedCartData.reduce((accumulator, cartItem) => {
      return accumulator + cartItem.price
    }, 0)

    setTotal(total)

    return updatedCartData
  })
}
