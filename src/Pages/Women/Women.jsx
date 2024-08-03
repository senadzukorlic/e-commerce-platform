import React, { useState, useContext, useEffect } from "react"
import { DataContext } from "../../Context/CreateContext"
import { Typography, CardActionArea } from "@mui/material"
import { Link } from "react-router-dom"
import {
  ParentDiv,
  Imagee,
  CardText,
  ImageWrapper,
  StyledCard,
} from "../../Components/ProductCard/ProductCardStyles"
import { BoxTab, CenteredContainer, CategoryH1 } from "./TabStyles"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

const allCategories = [
  "tops",
  "womens-dresses",
  "womens-bags",
  "womens-watches",
  "womens-shoes",
]

const categories = [
  { label: "All", category: allCategories },
  { label: "Women Dresses", category: ["womens-dresses"] },
  { label: "Tops", category: ["tops"] },

  { label: "Women Bags", category: ["womens-bags"] },
  { label: "Women Watches", category: ["womens-watches"] },
  { label: "Women Shoes", category: ["womens-shoes"] },
]

function Women() {
  const { data, inputValue, setProductDetail } = useContext(DataContext)
  const [activeCategory, setActiveCategory] = useState(allCategories)

  const handleTabChange = (event, newValue) => {
    setActiveCategory(newValue)
  }

  const filteredItems = data.filter((item) => {
    return activeCategory.includes(item.category.toLowerCase())
  })

  const addItemToProductPage = (item) => {
    const newItem = data.filter((dataItem) => dataItem.id === item.id)
    setProductDetail(newItem)
  }

  return (
    <>
      <CategoryH1>Women</CategoryH1>
      <CenteredContainer>
        <BoxTab>
          <Tabs
            value={activeCategory}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {categories.map((cat) => (
              <Tab key={cat.label} label={cat.label} value={cat.category} />
            ))}
          </Tabs>
        </BoxTab>
      </CenteredContainer>

      <ParentDiv>
        {filteredItems.map((item) => {
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
                    <Imagee image={item.images[0]} />
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
    </>
  )
}

export default Women
