const Sequelize = require("sequelize")
const sequelize = require("../util/database")

const Order = sequelize.define("order", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  cartId: {
    type: Sequelize.INTEGER, // Veza sa postojećom korpom
    allowNull: false,
  },
  paymentMethod: {
    type: Sequelize.STRING, // Npr. "Credit Card", "PayPal"
    allowNull: false,
  },
  deliveryInfo: {
    type: Sequelize.TEXT, // Adresa dostave ili dodatni detalji
    allowNull: true,
  },
  totalPrice: {
    type: Sequelize.FLOAT, // Ukupna cena narudžbine
    allowNull: false,
  },
})

module.exports = Order
