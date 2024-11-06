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
  User.findOne({ where: { email: email } }) //trazi korisnika u bazi podataka
    .then((user) => {
      if (!user) {
        //provera,u slucaju da korsinik nije pronadjen u bazi,izbacujemo gresku
        const error = new Error("User with this email could not be found")
        error.statusCode = 401 //ovaj kod oznacava da je korisnik neautorizovan da pristupi resursu,koristi se kada korisnik nije autentifikovan ili u bilo kojem slucaju kada korisnik nema dozvolu da pristupi resursu
        throw error
      }
      loadedUser = user
      return bcrypt.compare(password, user.password) //inace ako je email pronadjen,proveravamo da li je lozinka koju je korisnik uneo jednaka lozinki koja je sacuvana u bazi
    })
    .then((isEqual) => {
      if (!isEqual) {
        //alo ako lozinke nisu jednake,izbacujemo gresku
        const error = new Error("Wrong password!")
        error.statusCode = 401
        throw error
      }
      const token = jwt.sign(
        //ako su email i lozinka tacni,generisemo token, dabi se kreirao token,prvo se prosledjuje objekat sa podacima koje zelimo da sacuvamo u token,drugi argument je tajna lozinka koja se koristi za generisanje tokena,trece je objekat sa opcijama,ovde je postavljeno da token istice za 1h
        {
          email: loadedUser.email,
          userId: loadedUser.id.toString(),
        },
        "somesupersecret",
        { expiresIn: "1h" }
      )
      res.status(200).json({
        message: "You are loged", //poruka koja se salje klijentu,u browseru
        token: token, //vazno je razumeti kod tokena da ga mi samo kreiramo a da ga ne cuvamo nigde,token cuvaju frontend developeri u localStorage,znaci nase je samo da ga generisemo i posaljemo klijentu
        userId: loadedUser.id.toString(),
      })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
