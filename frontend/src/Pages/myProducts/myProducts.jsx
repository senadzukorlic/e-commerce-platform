// import React, { useState, useEffect } from "react"
// import axios from "axios"
// import { PageTitle } from "../../Components/PageTitle/pageTitle"
// import { Typography, CardActionArea } from "@mui/material"
// import {
//   ParentDiv,
//   Imagee,
//   CardText,
//   ImageWrapper,
//   StyledCard,
//   ButtonDiv,
// } from "./myProductsStyle"
// import { BlackButton } from "../../Components/blackButton/blackButton"
// import { OutlinedButton } from "../../Components/OutlinedButton/outlinedButton"
// export function MyProducts() {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const token = localStorage.getItem("token")
//         const response = await axios.get(
//           "http://localhost:8080/admin/my-products",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         )
//         setProducts(response.data.products)
//       } catch (error) {
//         setError("Failed to fetch products.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, [])

//   const handleDelete = async (productId) => {
//     try {
//       const token = localStorage.getItem("token")
//       await axios.delete(
//         `http://localhost:8080/admin/my-products/${productId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       // Remove the deleted product from the state
//       setProducts(products.filter((product) => product.id !== productId))
//     } catch (error) {
//       setError("Failed to delete product. Please try again.")
//       console.error("Delete error:", error)
//     }
//   }

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>{error}</div>
//   }

//   return (
//     <div>
//       <PageTitle title="My products" />
//       <ParentDiv>
//         {products.map((item) => (
//           <StyledCard key={item.id}>
//             <CardActionArea style={{ height: "700px" }}>
//               <ImageWrapper>
//                 <Imagee image={item.imageUrl} />
//               </ImageWrapper>

//               <CardText>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {item.title}
//                 </Typography>
//                 <Typography variant="h6" color="text.secondary">
//                   {item.price}€
//                 </Typography>
//               </CardText>
//               <ButtonDiv>
//                 <BlackButton buttonName="Edit" width={{ width: "80px" }} />
//                 <OutlinedButton
//                   onClick={() => handleDelete(item.id)}
//                   buttonName="Delete"
//                   width={{ width: "80px" }}
//                 />
//               </ButtonDiv>
//             </CardActionArea>
//           </StyledCard>
//         ))}
//       </ParentDiv>
//     </div>
//   )
// }

import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { PageTitle } from "../../Components/PageTitle/pageTitle"
import { Typography, CardActionArea } from "@mui/material"
import {
  ParentDiv,
  Imagee,
  CardText,
  ImageWrapper,
  StyledCard,
  ButtonDiv,
} from "./myProductsStyle"
import { BlackButton } from "../../Components/blackButton/blackButton"
import { OutlinedButton } from "../../Components/OutlinedButton/outlinedButton"
import { Link } from "react-router-dom"

export function MyProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(
        "http://localhost:8080/admin/my-products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setProducts(response.data.products)
      setError(null) // Resetujemo error ako je postojao
    } catch (error) {
      setError("Failed to fetch products.")
      console.error("Fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleDelete = async (productId) => {
    try {
      setLoading(true) // Pokazujemo loading state dok se briše
      const token = localStorage.getItem("token")

      await axios.delete(
        `http://localhost:8080/admin/my-products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      // Nakon uspešnog brisanja, osvežavamo listu proizvoda
      await fetchProducts()
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete product.")
    } finally {
      setLoading(false)
    }
  }

  const navigate = useNavigate()

  const handleEdit = (product) => {
    navigate("/update-your-own-product", {
      state: { product }, // Prosleđivanje podataka o proizvodu
    })
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <PageTitle title="My products" />
      <ParentDiv>
        {products.map((item) => (
          <StyledCard key={item.id}>
            <CardActionArea style={{ height: "700px" }}>
              <ImageWrapper>
                <Imagee image={item.imageUrl} />
              </ImageWrapper>

              <CardText>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {item.price}€
                </Typography>
              </CardText>
              <ButtonDiv>
                <BlackButton
                  // to="/update-your-own-product"
                  buttonName="Edit"
                  width={{ width: "80px" }}
                  onClick={() => handleEdit(item)}
                />
                <OutlinedButton
                  buttonName="Delete"
                  width={{ width: "80px" }}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this product?"
                      )
                    ) {
                      handleDelete(item.id)
                    }
                  }}
                />
              </ButtonDiv>
            </CardActionArea>
          </StyledCard>
        ))}
      </ParentDiv>
    </div>
  )
}
