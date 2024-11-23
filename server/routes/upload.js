const express = require("express")
const router = express.Router()
const multer = require("multer")
const { v4: uuidv4 } = require("uuid")
const path = require("path")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
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

const upload = multer({ storage: storage, fileFilter: fileFilter })

router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." })
  }
  res
    .status(201)
    .json({ message: "File uploaded successfully!", filePath: req.file.path })
})

module.exports = router
