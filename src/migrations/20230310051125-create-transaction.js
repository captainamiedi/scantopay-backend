'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      storeId: {
        type: Sequelize.UUID, 
        allowNull: false
      },
      total: {
        type: Sequelize.DECIMAL(10, 2)
      },
      charges: {
        type: Sequelize.DECIMAL(10, 2)
      },
      subCharges: {
        type: Sequelize.DECIMAL(10, 2)
      },
      transref: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('Pending', 'Successful', 'Failed', 'Reversed')
      },
      userId: {
        type: Sequelize.UUID
      },
      orderId: {
        type: Sequelize.UUID,
        allowNull: false
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
    await queryInterface.dropTable('Transactions');
  }
};