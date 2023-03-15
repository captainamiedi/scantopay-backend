'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentDetails.init({
    orderId: {
      type: DataTypes.INTEGER
    },
    // amount: {
    //   total: DataTypes.INTEGER
    // },
    provider: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'PaymentDetails',
  });
  return PaymentDetails;
};