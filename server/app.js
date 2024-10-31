const express = require("express")
const sequelize = require("./util/database")
const cors = require("cors") //omogucava serveru da komunicira sa drugim htttp
//serverima i da prima zahteve sa drugih domena
const authRoutes = require("./routes/auth")
const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  //postavljanje dozvola o ukidanju cors-8,dozvola klijentu da da postavlja konteknt type i autorizaciju i da salje metode (post,put,patch i delete)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Acces-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  )
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization")
  next()
})

app.use("/auth", authRoutes)
sequelize
  .sync()
  .then((res) => {
    app.listen(8080, () => {
      console.log("Server running on port 8080")
    })
  })
  .catch((err) => console.log(err))
