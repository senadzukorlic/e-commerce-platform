const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.signup = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({ where: { email: email } })
    .then((existingUser) => {
      if (existingUser) {
        const error = new Error("User with this email already exists")
        error.statusCode = 422 //oznacava da server razume tip sadrzaja i sintaksu zahteva,ali nije u mogucnosti da obradi zahtev.Upravo iz razloga sto je korisnik vec registrovan
        throw error
      }

      return bcrypt.hash(password, 12)
    })
    .then((hasPass) => {
      const user = new User({
        email: email,
        password: hasPass,
      })
      return user.save()
    })
    .then((result) => {
      res.status(201).json({ message: "User created!" })
    })
}
