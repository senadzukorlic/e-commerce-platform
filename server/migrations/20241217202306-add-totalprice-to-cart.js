"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Dodavanje kolone 'totalPrice' u tabelu 'cart'
    await queryInterface.addColumn("carts", "totalPrice", {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0, // Podrazumevana vrednost
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("carts", "totalPrice")
  },
}
