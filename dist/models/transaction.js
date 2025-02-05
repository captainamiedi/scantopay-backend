'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _require = require('sequelize'),
  Model = _require.Model;
module.exports = function (sequelize, DataTypes) {
  var Transaction = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Transaction, _Model);
    var _super = _createSuper(Transaction);
    function Transaction() {
      (0, _classCallCheck2["default"])(this, Transaction);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Transaction, null, [{
      key: "associate",
      value:
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      function associate(models) {
        // define association here
        this.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'user'
        });
        this.belongsTo(models.Store, {
          foreignKey: 'storeId',
          as: 'store'
        });
        this.belongsTo(models.OrderDetails, {
          foreignKey: 'orderId',
          as: 'Order'
        });
      }
    }]);
    return Transaction;
  }(Model);
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
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charges: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subCharges: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Successful', 'Failed', 'Reversed')
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    modelName: 'Transaction'
  });
  return Transaction;
};