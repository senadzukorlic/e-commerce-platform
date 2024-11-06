const express = require("express")
const authController = require("../controllers/auth")
const router = express.Router()
const { body } = require("express-validator")
const User = require("../models/user")

router.post(
  "/signup",
  [
    body("email") //Ova funkcija uzima vrednost iz email polja u telu zahteva (req.body.email).
      .isEmail() //Ova metoda proverava da li je vrednost validna email adresa.
      .withMessage("Please enter a valid email.") //Ako vrednost nije validna email adresa, ova poruka će biti vraćena kao greška.
      .custom((value, { req }) => {
        // Ova metoda omogućava prilagođenu validaciju. U ovom slučaju, proverava da li email adresa već postoji u bazi podataka.
        return User.findOne({ where: { email: value } }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!")
          }
        })
      })
      .normalizeEmail(), //Ova metoda normalizuje email adresu (npr. uklanja tačke iz Gmail adresa, pretvara sve karaktere u mala slova, itd.).
    body("password")
      .trim() //Ova metoda uklanja bele karaktere sa početka i kraja lozinke.
      .isLength({ min: 5 }),
    // body("name").trim().not().isEmpty(),
  ],
  authController.signup
)
router.post("/login", authController.login)

module.exports = router
