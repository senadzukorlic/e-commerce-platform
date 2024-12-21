const Products = require("../models/products")
const User = require("../models/user")

//ODRADITI DODATNE PROVERE DA LI JE KORISNIK ADMIN,DA LI SU SVE VREDNOSTI UNESENE I DA LI SU ISPRAVNE..

exports.getProducts = (req, res, next) => {
  User.findByPk(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found")
        error.statusCode = 402
        throw error
      }
      return user.getProducts()
    })
    .then((products) => {
      res.status(200).json({ products: products })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.createProduct = (req, res, next) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const size = req.body.size

  User.findByPk(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("User not found")
        error.statusCode = 404
        throw error
      }
      return user.createProduct({
        //moguce je koristiti metodu createProduct jer smo definisali relaciju izmedju User i Product modela
        title: title,
        imageUrl: imageUrl,
        price: price,
        size: size,
      })
    })
    .then((result) => {
      res.status(201).json({ message: "Product created", product: result })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId

  Products.findByPk(productId)
    .then((post) => {
      if (!post) {
        const error = new Error("Could not find post.")
        error.statusCode = 404 //404 (Not Found) koristi se da označi da server nije mogao da pronađe resurs koji je klijent tražio
        throw error
      }
      return post.destroy()
    })
    .then((result) => {
      res.status(200).json({ message: "Product deleted sucessfully" })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}

exports.editProduct = (req, res, next) => {
  const productId = req.params.productId

  const price = req.body.price
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const size = req.body.size

  Products.findByPk(productId)
    .then((product) => {
      if (!product) {
        const error = new Error("Product not found")
        error.statusCode = 404
        throw error
      }
      ;(product.price = price),
        (product.title = title),
        (product.size = size),
        (product.imageUrl = imageUrl)
      return product.save()
    })
    .then((result) => {
      res.status(200).json({ message: "Post updated", product: result })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
      next(err)
    })
}
