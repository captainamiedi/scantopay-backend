'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItem.init({
    productId: {
      type: DataTypes.UUID
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    orderId: {
      type: DataTypes.UUID
    }
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};