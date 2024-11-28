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
} from "./styleProductDetail"
import { getSizeOptions } from "../../Hooks/optionsSwitch"
import { BlackButton } from "../../Components/blackButton/blackButton"
import { OutlinedButton } from "../../Components/OutlinedButton/outlinedButton"
import { addToCart } from "../../Hooks/addToCart"
import { EmptyComponent } from "../../Components/empty/empty"
import Loader from "../../Styles/loader"

export function ProductDetailPage() {
  const {
    productDetail,
    setCartData,
    setCartCount,
    setTotal,
    setFavoriteItems,
  } = useDataContext()

  const item = productDetail[0]

  const [images, setImages] = useState([])
  const [prevNext, setPrexNext] = useState(0)
  const [imgNum, setImgNum] = useState(0)
  const [size, setSize] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (productDetail.length > 0) {
      setImages(productDetail[0].images)
      setImgNum(productDetail[0].images.length)
    }
  }, [productDetail])

  // const plus = () => {
  //   setPrexNext((current) => (current < imgNum - 1 ? current + 1 : current))
  // }

  // const minus = () => {
  //   setPrexNext((current) => (current > 0 ? current - 1 : current))
  // }

  const plus = () => {
    if (prevNext < imgNum - 1) {
      setIsLoading(true) // Uključuje loader
      setTimeout(() => {
        setPrexNext((current) => current + 1) // Ažurira sliku
        setIsLoading(false) // Isključuje loader
      }, 1000) // Simulacija vremena učitavanja
    }
  }

  const minus = () => {
    if (prevNext > 0) {
      setIsLoading(true) // Uključuje loader
      setTimeout(() => {
        setPrexNext((current) => current - 1) // Ažurira sliku
        setIsLoading(false) // Isključuje loader
      }, 1000) // Simulacija vremena učitavanja
    }
  }

  const handleSizeClick = (size) => {
    setSize(size)
  }

  const handleAddToFavorite = (item) => {
    const itemWithSize = { ...item, size }
    setFavoriteItems((prevFavoriteItems) => {
      if (prevFavoriteItems) {
      }
      const isAlreadyFavorite = prevFavoriteItems.some(
        (favoriteItem) =>
          favoriteItem.id === itemWithSize.id &&
          favoriteItem.size === itemWithSize.size
      )

      if (isAlreadyFavorite) {
        return prevFavoriteItems
      }

      return [...prevFavoriteItems, itemWithSize]
    })
  }

  const sizeOptions = getSizeOptions(item?.category)

  const handleAddToCart = () => {
    addToCart({
      item,
      setCartCount,
      setCartData,
      setTotal,
      alertMessage: "Please select a size before adding to bag",
      size,
    })
  }

  return (
    <ParentDiv>
      {productDetail.length > 0 ? (
        <>
          <CardContentImageStyled>
            {isLoading ? (
              <Loader size={50} /> // Prikazuje loader dok se slika učitava
            ) : (
              <>
                <Image component="img" image={images[prevNext]} />

                {/* <Image component="img" image={images[prevNext]} /> */}
                <ArrowButton onClick={minus} style={{ right: "75px" }}>
                  <ArrowBackIos style={{ fontSize: "20px" }} />
                </ArrowButton>
                <ArrowButton onClick={plus} style={{ right: "40px" }}>
                  <ArrowForwardIos style={{ fontSize: "20px" }} />
                </ArrowButton>
              </>
            )}
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
                {sizeOptions.length > 0 && (
                  <>
                    <Typography
                      style={{ paddingBottom: "20px", fontFamily: "Roboto" }}
                      variant="h5"
                    >
                      Select size
                    </Typography>
                    <SizeButtonDiv>
                      {sizeOptions.map((sizeOption, id) => (
                        <ButtonSize
                          key={id}
                          variant="outlined"
                          onClick={() => handleSizeClick(sizeOption.value)}
                          style={{
                            backgroundColor:
                              size === sizeOption.value ? "black" : "white",
                            color:
                              size === sizeOption.value ? "white" : "black",
                          }}
                        >
                          {sizeOption.label}
                        </ButtonSize>
                      ))}
                    </SizeButtonDiv>
                  </>
                )}
                <BlackButton
                  buttonName="Add to Bag"
                  width={{ width: "100%" }}
                  onClick={handleAddToCart}
                />
                <br />
                <br />

                <OutlinedButton
                  buttonName="Favorite"
                  width={{ width: "100%" }}
                  onClick={() => handleAddToFavorite({ ...item, size })}
                />
              </Box>
            </CardContent>
          </CardProductDetail>
        </>
      ) : (
        <>
          <EmptyComponent text="Page Not Found" />
        </>
      )}
    </ParentDiv>
  )
}
