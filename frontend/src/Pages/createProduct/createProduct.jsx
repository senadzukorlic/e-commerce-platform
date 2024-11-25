import { PageTitle } from "../../Components/PageTitle/pageTitle"
import { useState } from "react"
import { Input } from "../../Components/Input/input"
import { BlackButton } from "../../Components/blackButton/blackButton"
import { ParentDiv, InputDiv } from "./createProductStyle"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [size, setSize] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("token")
      console.log("Token:", token)
      const response = await axios.post(
        "http://localhost:8080/admin/my-products",
        {
          title: title,
          price: price,
          imageUrl: imageUrl,
          size: size,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      setImageUrl("")
      setPrice("")
      setSize("")
      setTitle("")

      toast.success("You have successfully created the product!")
      console.log("Product is created!")
    } catch (e) {
      console.log(`product nije creiran`, e)
    }
  }

  const onChangeValue = (setter) => (e) => {
    setter(e.target.value)
  }

  return (
    <ParentDiv>
      <PageTitle title="Create your own product" />
      <InputDiv onSubmit={handleSubmit}>
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
          buttonName="create product"
          type="submit"
          width={{ width: "21%", marginTop: "30px" }}
        />
      </InputDiv>
    </ParentDiv>
  )
}
