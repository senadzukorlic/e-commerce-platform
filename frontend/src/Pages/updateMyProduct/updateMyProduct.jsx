import { PageTitle } from "../../Components/PageTitle/pageTitle"
import { useEffect, useState } from "react"
import { Input } from "../../Components/Input/input"
import { BlackButton } from "../../Components/blackButton/blackButton"
import { ParentDiv, InputDiv } from "./updateMyProductStyle"
import axios from "axios"
import { toast } from "react-toastify"
import { useLocation } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"

export function UpdateMyProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [size, setSize] = useState("")

  const location = useLocation()
  const { product } = location.state || {}
  //   const fetchProduct = async (e) => {
  //     try {
  //       const token = localStorage.getItem("token")
  //       const response = await axios.get(
  //         "http://localhost:8080/my-products/:productId",
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       )
  //     } catch (e) {
  //       console.log(`product nije creiran`, e)
  //     }
  //   }

  useEffect(() => {
    fetchProduct()
  }, [])

  const handleUpdate = async (productId) => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.patch(
        "http://localhost:8080/my-products/:productId",
        { Authorization: `Bearers ${token}` },
        {
          imageUrl: imageUrl,
          size: size,
          title: title,
          price: price,
        }
      )
      await fetchProduct()
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
          value={product.title}
          //   onChange={onChangeValue(setTitle)}
        />
        <Input
          type="text"
          labelName="Price"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
          value={product.price}
          //   onChange={onChangeValue(setPrice)}
        />
        <Input
          type="text"
          labelName="Image"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
          value={product.imageUrl}
          //   onChange={onChangeValue(setImageUrl)}
        />
        <Input
          type="text"
          labelName="Size"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
          value={product.size}
          //   onChange={onChangeValue(setSize)}
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
