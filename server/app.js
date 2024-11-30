const express = require("express")
const sequelize = require("./util/database")
const cors = require("cors") //omogucava serveru da komunicira sa drugim htttp
//serverima i da prima zahteve sa drugih domena
const path = require("path")

const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/admin")

const multer = require("multer")
const { v4: uuidv4 } = require("uuid")

const app = express()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images")
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname))
  },
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

app.use(multer({ storage: storage, fileFilter: fileFilter }).single("image"))
app.use(express.json())
app.use(cors())
app.use("/images", express.static(path.join(__dirname, "images")))

app.use((req, res, next) => {
  //postavljanje dozvola o ukidanju cors-8,dozvola klijentu da da postavlja kontent type i autorizaciju i da salje metode (post,put,patch i delete)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Acces-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  )
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization") //Authorization header-Koristi se za slanje podataka o autentifikaciji između klijenta i servera
  next()
})

app.use("/auth", authRoutes)
app.use("/admin", adminRoutes)

app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode
  const message = error.message
  const data = error.data
  res.status(status).json({ message: message, data: data })
})

const User = require("./models/user")
const Cart = require("./models/cart")
const CartProducts = require("./models/cart-products")
const Product = require("./models/products")

User.hasMany(Product)
Product.belongsTo(User)

// Korisnik i Korpa
User.hasOne(Cart) // Jedan korisnik ima jednu korpu
Cart.belongsTo(User) // Korpa pripada jednom korisniku

// Korpa i Posrednički model (CartProducts)
Cart.hasMany(CartProducts) // Korpa ima više zapisa u posredničkom modelu
CartProducts.belongsTo(Cart) // Posrednički zapis pripada jednoj korpi

// Proizvod i Posrednički model (CartProducts)
Product.hasMany(CartProducts) // Proizvod može biti u više posredničkih zapisa
CartProducts.belongsTo(Product) // Posrednički zapis pripada jednom proizvodu

sequelize
  .sync()
  .then((res) => {
    app.listen(8080, () => {
      console.log("Server running on port 8080")
    })
  })
  .catch((err) => console.log(err))
