import { useDataContext } from "../../Hooks/useContext"
import { Typography, CardActionArea } from "@mui/material"
import { Link } from "react-router-dom"
import { ParentDiv, Imagee, CardText, ImageWrapper, StyledCard } from "./style"

export function ProductCard({ filteredItems }) {
  const { data, inputValue, setProductDetail } = useDataContext()

  const addItemToProductPage = (item) => {
    const newItem = data.filter((dataItem) => dataItem.id === item.id)
    setProductDetail(newItem)
  }

  return (
    <ParentDiv>
      {filteredItems.map((item) => {
        if (
          !inputValue ||
          item.title.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          return (
            <StyledCard key={item.id}>
              <CardActionArea
                style={{ height: "460px" }}
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
  )
}
