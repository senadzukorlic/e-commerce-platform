const Sequelize = require("sequelize")
const sequelize = require("../util/database")

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
})

module.exports = CartProducts
