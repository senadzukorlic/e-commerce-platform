import { PageTitle } from "../../Components/PageTitle/pageTitle"
import { useEffect, useState } from "react"
import { Input } from "../../Components/Input/input"
import { BlackButton } from "../../Components/blackButton/blackButton"
import { ParentDiv, InputDiv } from "./updateMyProductStyle"
import axios from "axios"
import { useLocation } from "react-router-dom"

export function UpdateMyProduct() {
  const location = useLocation()
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [size, setSize] = useState("")
  const [productId, setProductId] = useState(null)

  useEffect(() => {
    // Check if product is passed in location state
    if (location.state && location.state.product) {
      const { product } = location.state
      setTitle(product.title)
      setPrice(product.price)
      setImageUrl(product.imageUrl)
      setSize(product.size)
      setProductId(product.id)
    }
  }, [location.state])

  const handleUpdate = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    try {
      const response = await axios.patch(
        `http://localhost:8080/my-products/${productId}`,
        { Authorization: `Bearers ${token}` },
        {
          imageUrl,
          size,
          title,
          price,
        }
      )
    } catch (error) {
      console.log(`Product is not updated`)
    }
  }

  const onChangeValue = (setter) => (e) => {
    setter(e.target.value)
  }

  return (
    <ParentDiv>
      <PageTitle title="Update product" />
      <InputDiv onSubmit={handleUpdate}>
        <Input
          type="text"
          labelName="Title"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
          value={title}
          onChange={onChangeValue(setTitle)}
        />
        <Input
          type="text"
          labelName="Price"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
          value={price}
          onChange={onChangeValue(setPrice)}
        />
        <Input
          type="text"
          labelName="Image"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
          value={imageUrl}
          onChange={onChangeValue(setImageUrl)}
        />
        <Input
          type="text"
          labelName="Size"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
          value={size}
          onChange={onChangeValue(setSize)}
        />
        <BlackButton
          buttonName="update product"
          type="submit"
          width={{ width: "21%", marginTop: "30px" }}
        />
      </InputDiv>
    </ParentDiv>
  )
}
