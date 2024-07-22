// import { useContext, useEffect, useState } from "react"
// import { DataContext } from "../../Context/CreateContext"
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Box,
//   IconButton,
// } from "@mui/material"
// import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
// import {
//   CardProductDetail,
//   ParentDiv,
//   Image,
//   CardContentImageStyled,
//   ButtonSize,
//   CardContentStyle,
// } from "./ProductDetailPageStyle"

// export function ProductDetailPage() {
//   const { productDetail, setCartData, setCartCount, setTotal } =
//     useContext(DataContext)

//   const item = productDetail[0]

//   // const [size, setSize] = useState("")
//   const [images, setImages] = useState([])
//   const [prevNext, setPrexNext] = useState(0)
//   const [imgNum, setImgNum] = useState(0)

//   useEffect(() => {
//     if (productDetail.length > 0) {
//       setImages(productDetail[0].images)
//       setImgNum(productDetail[0].images.length)
//     }
//   }, [productDetail])

//   const plus = () => {
//     setPrexNext((current) => {
//       if (current < imgNum - 1) {
//         return current + 1
//       } else {
//         return current
//       }
//     })
//   }

//   const minus = () => {
//     setPrexNext((current) => {
//       if (current > 0) {
//         return current - 1
//       } else {
//         return current
//       }
//     })
//   }
//   const handleAddToCart = (item) => {
//     setCartData((prevCartData) => {
//       const isItemInCart = prevCartData.some(
//         (cartItem) => cartItem.id === item.id
//       )
//       if (isItemInCart) {
//         return prevCartData
//       }
//       const updatedCartData = [...prevCartData, item]

//       setCartCount((currentValue) => currentValue + 1)

//       const total = updatedCartData.reduce((accumulator, cartItem) => {
//         return accumulator + cartItem.price
//       }, 0)

//       setTotal(total)

//       return updatedCartData
//     })
//   }

//   return (
//     <ParentDiv>
//       {productDetail ? (
//         <>
//           <CardContentImageStyled>
//             <Image component="img" image={images[prevNext]} />
//             <IconButton
//               onClick={minus}
//               style={{
//                 position: "absolute",
//                 bottom: "10px",
//                 right: "85px",
//                 backgroundColor: "#f0f0f0",
//                 borderRadius: "50%",
//               }}
//             >
//               <ArrowBackIos />
//             </IconButton>
//             <IconButton
//               onClick={plus}
//               style={{
//                 position: "absolute",
//                 bottom: "10px",
//                 right: "40px",
//                 backgroundColor: "#f0f0f0",
//                 borderRadius: "50%",
//               }}
//             >
//               <ArrowForwardIos />
//             </IconButton>
//           </CardContentImageStyled>

//           <CardProductDetail>
//             <CardContent>
//               <Typography gutterBottom variant="h4" component="div">
//                 {item.title}
//                 {item.id}
//               </Typography>
//               <Typography variant="h6" color="text.secondary">
//                 {item.price}€
//               </Typography>

//               <Box sx={{ mt: 2 }}>
//                 <Typography
//                   style={{ paddingBottom: "20px" }}
//                   variant="h5"
//                   sx={{ fontFamily: "Roboto" }}
//                 >
//                   Select size
//                 </Typography>
//                 <div style={{ paddingBottom: "20px" }}>
//                   <ButtonSize variant="outlined">XS</ButtonSize>
//                   <ButtonSize variant="outlined">S </ButtonSize>
//                   <ButtonSize variant="outlined">M </ButtonSize>
//                   <ButtonSize variant="outlined">L </ButtonSize>
//                   <ButtonSize variant="outlined">XL </ButtonSize>
//                   <ButtonSize variant="outlined">XLL </ButtonSize>
//                 </div>
//                 <Button
//                   variant="contained"
//                   sx={{ backgroundColor: "black", color: "white" }}
//                   fullWidth
//                   onClick={() => handleAddToCart(item)}
//                 >
//                   Add
//                 </Button>
//               </Box>
//             </CardContent>
//           </CardProductDetail>
//         </>
//       ) : (
//         <h1>Nema nista</h1>
//       )}
//     </ParentDiv>
//   )
// }

import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../Context/CreateContext"
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import {
  CardProductDetail,
  ParentDiv,
  Image,
  CardContentImageStyled,
  ButtonSize,
} from "./ProductDetailPageStyle"

export function ProductDetailPage() {
  const { productDetail, setCartData, setCartCount, setTotal } =
    useContext(DataContext)

  const item = productDetail[0]

  const [images, setImages] = useState([])
  const [prevNext, setPrexNext] = useState(0)
  const [imgNum, setImgNum] = useState(0)

  useEffect(() => {
    if (productDetail.length > 0) {
      setImages(productDetail[0].images)
      setImgNum(productDetail[0].images.length)
    }
  }, [productDetail])

  const plus = () => {
    setPrexNext((current) => {
      if (current < imgNum - 1) {
        return current + 1
      } else {
        return current
      }
    })
  }

  const minus = () => {
    setPrexNext((current) => {
      if (current > 0) {
        return current - 1
      } else {
        return current
      }
    })
  }

  const handleAddToCart = (item) => {
    setCartData((prevCartData) => {
      const isItemInCart = prevCartData.some(
        (cartItem) => cartItem.id === item.id
      )
      if (isItemInCart) {
        return prevCartData
      }
      const updatedCartData = [...prevCartData, item]

      setCartCount((currentValue) => currentValue + 1)

      const total = updatedCartData.reduce((accumulator, cartItem) => {
        return accumulator + cartItem.price
      }, 0)

      setTotal(total)

      return updatedCartData
    })
  }

  return (
    <ParentDiv>
      {productDetail.length > 0 ? (
        <>
          <CardContentImageStyled>
            <Image component="img" image={images[prevNext]} />
            <IconButton
              onClick={minus}
              style={{
                position: "absolute",
                bottom: "30px",
                right: "75px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <ArrowBackIos style={{ width: "20px", height: "20px" }} />
            </IconButton>
            <IconButton
              onClick={plus}
              style={{
                position: "absolute",
                bottom: "30px",
                right: "40px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
              }}
            >
              <ArrowForwardIos style={{ width: "20px", height: "20px" }} />
            </IconButton>
          </CardContentImageStyled>

          <CardProductDetail>
            <CardContent style={{ border: "none" }}>
              <Typography gutterBottom variant="h4" component="div">
                {item.title}
                {item.id}
              </Typography>
              <Typography
                variant="p"
                color="black"
                fontFamily="Roboto"
                fontWeight="600"
                fontSize="22px"
              >
                {item.price}€
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography
                  style={{ paddingBottom: "20px" }}
                  variant="h5"
                  sx={{ fontFamily: "Roboto" }}
                >
                  Select size
                </Typography>
                <div style={{ paddingBottom: "20px" }}>
                  <ButtonSize variant="outlined">XS</ButtonSize>
                  <ButtonSize variant="outlined">S </ButtonSize>
                  <ButtonSize variant="outlined">M </ButtonSize>
                  <ButtonSize variant="outlined">L </ButtonSize>
                  <ButtonSize variant="outlined">XL </ButtonSize>
                  <ButtonSize variant="outlined">XLL </ButtonSize>
                </div>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "20px",
                    border: "1px solid gray",
                  }}
                  fullWidth
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Bag
                </Button>
                <br />
                <br />
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "20px",
                    border: "1px solid gray",
                  }}
                  fullWidth
                  onClick={() => handleAddToCart(item)}
                >
                  Favorite
                </Button>
              </Box>
            </CardContent>
          </CardProductDetail>
        </>
      ) : (
        <h1>Nema nista</h1>
      )}
    </ParentDiv>
  )
}
