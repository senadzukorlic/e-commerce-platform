import { PageTitle } from "../../Components/PageTitle/pageTitle"
import { useState } from "react"
import { Input } from "../../Components/Input/input"
import { BlackButton } from "../../Components/blackButton/blackButton"

export function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [size, setSize] = useState("")

  return (
    <div
      style={{
        display: "flex",
        // backgroundColor: "red",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // height: "100%",
        // width: "100%",
      }}
    >
      <PageTitle title="Create your own product" />
      <div
        style={{
          display: "flex",
          // backgroundColor: "red",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <Input
          type="text"
          labelName="Title"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
        />
        <Input
          type="text"
          labelName="Price"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
        />
        <Input
          type="text"
          labelName="Image"
          styleInput={{ width: "20%" }}
          styleLabel={{ width: "21%" }}
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
      </div>
    </div>
  )
}
