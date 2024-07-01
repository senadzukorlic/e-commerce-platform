import * as React from "react"
import { useState, useEffect } from "react"

import { Card, Typography, Button, CardActionArea } from "@mui/material"

import { GetData } from "../../Api/Requests"
import { ParentDiv, Imagee, CardText, ButtonCard } from "../../items.styled"

import NavBar from "../../MUI/NavBar"
import Tabb from "../ElectronicsCard/ElectronicTab"

export function Tablets() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await GetData()
      setData(response)
    }
    fetchData()
  }, [])

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
        Electronics
      </h1>
      <Tabb />
      <ParentDiv>
        {data
          .filter((item) => item.category.toLowerCase() === "tablets")
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
