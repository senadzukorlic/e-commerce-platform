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
  totalPrice: {
    type: Sequelize.FLOAT, // Ukupna cena narudžbine
    allowNull: false,
  },
  email: { type: Sequelize.STRING, allowNull: false },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  postalCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Order
