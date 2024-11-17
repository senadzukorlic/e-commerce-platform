import { PageTitle } from "../../Components/PageTitle/pageTitle"
import { useState } from "react"
import { Input } from "../../Components/Input/input"
import { BlackButton } from "../../Components/blackButton/blackButton"
import { ParentDiv, InputDiv } from "./createProductStyle"

export function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const onChangeValue = (setter) => (e) => {
    setter(e.target.value)
  }

  return (
    <ParentDiv>
      <PageTitle title="Create your own product" />
      <InputDiv>
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
