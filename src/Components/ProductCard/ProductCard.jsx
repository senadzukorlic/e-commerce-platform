import { useContext } from "react"
import { DataContext } from "../../Context/DataContext"
import { Card, Typography, Button, CardActionArea } from "@mui/material"
import { ParentDiv, Imagee, CardText, ButtonCard } from "./ProductCardStyles"

export function ProductData({ category }) {
  const { data, inputValue } = useContext(DataContext)

  return (
    <ParentDiv>
      {data
        .filter((item) => item.category.toLowerCase() === category)
        .map((item) => {
          if (
            !inputValue ||
            item.title.toLowerCase().includes(inputValue.toLowerCase())
          ) {
            return (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  alignItems: "center",
                  height: 550,
                  width: 350,
                  backgroundColor: "whitesmoke",
                  borderRadius: 5,
                  margin: "90px 30px",
                }}
              >
                <CardActionArea>
                  <Imagee
                    component="img"
                    height="330"
                    width="270"
                    image={item.images[0]}
                    alt={item.title}
                  />
                  <CardText>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price}€
                    </Typography>
                  </CardText>
                </CardActionArea>
                <ButtonCard>
                  <Button size="Medium" color="inherit">
                    Buy
                  </Button>
                  <Button size="medium" color="inherit">
                    Add to Card
                  </Button>
                </ButtonCard>
              </Card>
            )
          }
          return null
        })}
    </ParentDiv>
  )
}
