import React, { useState } from "react"
import axios from "axios"

export function UploadFile() {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState("")

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("image", file)

    try {
      const token = localStorage.getItem("token")
      const response = await axios.post(
        "http://localhost:8080/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setMessage("File uploaded successfully!")
    } catch (error) {
      setMessage("Failed to upload file.")
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
