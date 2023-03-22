'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
      this.belongsTo(models.Store, {
        foreignKey: 'storeId',
        as: 'store'
      })
      this.belongsTo(models.OrderDetails, {
        foreignKey: 'orderId',
        as: 'Order'
      })
    }
  }
  Transaction.init({
    storeId: {
      type: DataTypes.UUID,
      allowNull: false
    }, 
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    total:{  
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charges: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subCharges: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Successful', 'Failed', 'Reversed')
    },
    userId: {
      type:DataTypes.UUID,
      allowNull: false
    },
    orderId: {
      type:DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};