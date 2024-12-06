const Sequelize = require("sequelize")
const sequelize = require("../util/database")

const OrderProducts = sequelize.define("orderProducts", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    type: Sequelize.INTEGER, // Veza sa `Order`
    allowNull: false,
  },
  productId: {
    type: Sequelize.INTEGER, // Veza sa `Product`
    allowNull: false,
  },
})

module.exports = OrderProducts
