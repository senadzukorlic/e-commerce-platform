const User = require("../models/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { sendTestEmail } = require("../mailer")
const { validationResult } = require("express-validator")

exports.signup = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed")
    error.statusCode = 422
    error.data = errors.array()
    return next(error)
  }
  const email = req.body.email
  const password = req.body.password
  const confirmPassword = req.body.confirmPassword

  User.findOne({ where: { email: email } })
    .then((existingUser) => {
      if (existingUser) {
        const error = new Error("User with this email already exists")
        error.statusCode = 422 //oznacava da server razume tip sadrzaja i sintaksu zahteva,ali nije u mogucnosti da obradi zahtev.Upravo iz razloga sto je korisnik vec registrovan
        throw error
      }
      if (password !== confirmPassword) {
        const error = new Error("Passwords do not match")
        error.statusCode = 422
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
      res.status(201).json({ message: "User created!" }) //poruka koja se salje klijentu,u browseru
      return sendTestEmail(email) //salje email korisniku koji se registrovao
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.login = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  let loadedUser
  User.findOne({ where: { email: email } })
    .then((user) => {
      loadedUser = user
      return bcrypt.compare(password, user.password)
    })
    .then((result) => {
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser.id.toString(),
        },
        "somesupersecret",
        { expiresIn: "1h" }
      )
      res.status(200).json({ token: token, userId: loadedUser.id.toString() })
    })
    .catch((err) => {
      console.log("Nema prijave", err)
    })
}
