'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
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
      this.hasMany(models.OrderItem, {
        foreignKey: 'orderId',
        as: 'order'
      })
    }
  }
  OrderDetails.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID
    },
    total: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.ENUM('pending', 'success', 'failed', 'reversed'),
      defaultValue: 'pending'
    },
    serviceCharge: {
      type: DataTypes.INTEGER
    },
    storeId: {
      type: DataTypes.UUID,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  return OrderDetails;
};