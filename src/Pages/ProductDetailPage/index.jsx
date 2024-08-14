import { useEffect, useState } from "react"
import { useDataContext } from "../../Hooks/useContext"
import { CardContent, Typography, Box } from "@mui/material"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import {
  CardProductDetail,
  ParentDiv,
  Image,
  CardContentImageStyled,
  ButtonSize,
  SizeButtonDiv,
  ArrowButton,
} from "./style"
import { BlackButton } from "../../Components/BlackButton"
import { OutlinedButton } from "../../Components/OutlinedButton"

export function ProductDetailPage() {
  const {
    productDetail,
    setCartData,
    setCartCount,
    setTotal,
    setFavoriteItems,
    favoriteItems,
  } = useDataContext()

  const item = productDetail[0]
  const sizeArray = ["XS", "S", "M", "L", "XL", "XXL"]

  const [images, setImages] = useState([])
  const [prevNext, setPrexNext] = useState(0)
  const [imgNum, setImgNum] = useState(0)
  const [size, setSize] = useState("")

  useEffect(() => {
    if (productDetail.length > 0) {
      setImages(productDetail[0].images)
      setImgNum(productDetail[0].images.length)
    }
  }, [productDetail])

  const plus = () => {
    setPrexNext((current) => (current < imgNum - 1 ? current + 1 : current))
  }

  const minus = () => {
    setPrexNext((current) => (current > 0 ? current - 1 : current))
  }

  const handleSizeClick = (size) => {
    setSize(size)
  }

  const handleAddToCart = (item) => {
    if (!size) {
      alert("Please select a size before adding to bag")
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

  const handleAddToFavorite = (item) => {
    setFavoriteItems((prevFavoriteItems) => {
      const isAlreadyFavorite = prevFavoriteItems.some(
        (favoriteItem) => favoriteItem.id === item.id
      )

      if (isAlreadyFavorite) {
        return prevFavoriteItems
      }

      return [...prevFavoriteItems, item]
    })
    if (favoriteItems) {
      alert("Item is added to favorite")
    }
  }

  return (
    <ParentDiv>
      {productDetail.length > 0 ? (
        <>
          <CardContentImageStyled>
            <Image component="img" image={images[prevNext]} />
            <ArrowButton onClick={minus} style={{ right: "75px" }}>
              <ArrowBackIos style={{ fontSize: "20px" }} />
            </ArrowButton>
            <ArrowButton onClick={plus} style={{ right: "40px" }}>
              <ArrowForwardIos style={{ fontSize: "20px" }} />
            </ArrowButton>
          </CardContentImageStyled>

          <CardProductDetail>
            <CardContent style={{ border: "none" }}>
              <Typography gutterBottom variant="h4" component="div">
                {item.title}
              </Typography>
              <Typography
                variant="p"
                color="black"
                fontFamily="Roboto"
                fontWeight="500"
                fontSize="22px"
              >
                {item.price}€
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography
                  style={{ paddingBottom: "20px", fontFamily: "Roboto" }}
                  variant="h5"
                >
                  Select size
                </Typography>
                <SizeButtonDiv>
                  {sizeArray.map((sizeOption) => (
                    <ButtonSize
                      key={sizeOption}
                      variant="outlined"
                      onClick={() => handleSizeClick(sizeOption)}
                      style={{
                        backgroundColor:
                          size === sizeOption ? "black" : "white",
                        color: size === sizeOption ? "white" : "black",
                      }}
                    >
                      {sizeOption}
                    </ButtonSize>
                  ))}
                </SizeButtonDiv>
                <BlackButton
                  buttonName="Add to Bag"
                  width={{ width: "100%" }}
                  onClick={() => handleAddToCart(item)}
                />
                <br />
                <br />

                <OutlinedButton
                  buttonName="Favorite"
                  width={{ width: "100%" }}
                  onClick={() => handleAddToFavorite(item)}
                />
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
