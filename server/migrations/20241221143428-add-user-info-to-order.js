"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("orders", "email", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn("orders", "firstName", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn("orders", "lastName", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn("orders", "address", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn("orders", "city", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn("orders", "postalCode", {
      type: Sequelize.STRING,
      allowNull: false,
    })
    await queryInterface.addColumn("orders", "phoneNumber", {
      type: Sequelize.STRING,
      allowNull: false,
    })
  },
}
