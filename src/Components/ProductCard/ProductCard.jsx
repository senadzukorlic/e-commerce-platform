import { useContext, useState } from "react"
import { DataContext } from "../../Context/CreateContext"
import { Typography, CardActionArea } from "@mui/material"
import { Link } from "react-router-dom"
import {
  ParentDiv,
  Imagee,
  CardText,
  ImageWrapper,
  StyledCard,
} from "./ProductCardStyles"

export function ProductData({ categories }) {
  const { data, inputValue, setProductDetail } = useContext(DataContext)

  const addItemToProductPage = (item) => {
    const newItem = data.filter((dataItem) => dataItem.id === item.id)
    setProductDetail(newItem)
  }

  return (
    <ParentDiv>
      {data
        .filter((item) => categories.includes(item.category.toLowerCase()))
        .map((item) => {
          if (
            !inputValue ||
            item.title.toLowerCase().includes(inputValue.toLowerCase())
          ) {
            return (
              <StyledCard key={item.id}>
                <CardActionArea
                  onClick={() => addItemToProductPage(item)}
                  component={Link}
                  to="/product-detail-page"
                >
                  <ImageWrapper>
                    <Imagee image={item.images[0]} alt={item.title} />
                  </ImageWrapper>

                  <CardText>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {item.price}€
                    </Typography>
                  </CardText>
                </CardActionArea>
              </StyledCard>
            )
          }
          return null
        })}
    </ParentDiv>
  )
}
