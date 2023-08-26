const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const EndUser = sequelize.define(
  "enduser",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {timestamps: false}
);

module.exports = EndUser;
