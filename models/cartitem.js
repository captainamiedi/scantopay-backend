'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
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

      this.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product'
      })
    }
  }
  CartItem.init({
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    total: {
      type: DataTypes.INTEGER
    },
    charges: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};