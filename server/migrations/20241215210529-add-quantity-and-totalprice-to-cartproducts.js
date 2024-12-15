"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Dodavanje kolone 'totalPrice' u tabelu 'CartProducts'
    await queryInterface.addColumn("CartProducts", "totalPrice", {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0, // Podrazumevana vrednost
    })
  },

  async down(queryInterface, Sequelize) {
    // Uklanjanje kolone 'quantity' iz tabele 'CartProducts'
    await queryInterface.removeColumn("CartProducts", "quantity")

    // Uklanjanje kolone 'totalPrice' iz tabele 'CartProducts'
    await queryInterface.removeColumn("CartProducts", "totalPrice")
  },
}
