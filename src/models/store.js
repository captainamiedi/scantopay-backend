'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {
        foreignKey: 'storeId',
        as: 'store'
      })

      this.hasMany(models.Transaction, {
        foreignKey: 'storeId',
        as: 'transaction'
      })
      this.hasMany(models.OrderDetails, {
        foreignKey: 'storeId',
        as: 'order'
      })
    }
  }
  Store.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING
    },
    description: DataTypes.STRING,
    discount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};