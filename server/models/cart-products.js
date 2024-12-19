const Sequelize = require("sequelize")
const sequelize = require("../util/database")
const Product = require("../models/products")

const CartProducts = sequelize.define("CartProducts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productId: { type: Sequelize.INTEGER, allowNull: false },
  cartId: { type: Sequelize.INTEGER, allowNull: false },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1, // Podrazumevano 1 proizvod
  },
  totalPrice: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0, // Podrazumevana vrednost}
  },
})

CartProducts.addHook("beforeSave", async (cartProduct) => {
  const product = await Product.findByPk(cartProduct.productId)

  if (product) {
    // Postavi totalPrice na osnovu quantity * price
    cartProduct.totalPrice = cartProduct.quantity * product.price
  }
})
module.exports = CartProducts
