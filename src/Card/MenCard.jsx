import * as React from "react"
import { useState, useEffect } from "react"

import { Card, Typography, Button, CardActionArea } from "@mui/material"

import { GetData } from "../Api/Requests"
import { ParentDiv, Imagee, CardText, ButtonCard } from "../items.styled/"
import NavBar from "../MUI/NavBar"
import Tab from "../MUI/Tab"

export function MenCard() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await GetData()
      console.log(response)
      setData(response)
    }
    fetchData()
  }, [])

  const categories = ["mens-watches", "mens-shoes", "mens-shirts"]

  return (
    <>
      <NavBar />
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "sans-serif",
          color: "gray",
        }}
      >
        Men
      </h1>
      <Tab />
      <ParentDiv>
        {data
          .filter((item) => categories.includes(item.category.toLowerCase()))
          .map((item) => (
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
          ))}
      </ParentDiv>
    </>
  )
}
