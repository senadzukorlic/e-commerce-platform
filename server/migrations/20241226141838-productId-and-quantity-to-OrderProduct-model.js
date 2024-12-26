"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Dodavanje kolone 'quantity' u tabelu 'OrderProducts'
    await queryInterface.addColumn("OrderProducts", "quantity", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1, // Podrazumevana vrednost ako nije postavljeno
    })
  },

  async down(queryInterface, Sequelize) {
    // Uklanjanje kolone 'quantity'
    await queryInterface.removeColumn("OrderProducts", "quantity")
  },
}
