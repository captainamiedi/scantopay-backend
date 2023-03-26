'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userId: {
        type: Sequelize.UUID
      },
      total: {
        type: Sequelize.DECIMAL(10, 2)
      },
      serviceCharge: {
        type: Sequelize.DECIMAL(10, 2)
      },
      paymentId: {
        type: Sequelize.UUID
      },
      status: {
        type: Sequelize.ENUM('pending', 'success', 'failed', 'reversed'),
        defaultValue: 'pending'
      },
      storeId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderDetails');
  }
};