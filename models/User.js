const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const Chatbot = require("./ChatbotModel.js");

const User = sequelize.define(
  "user",
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

User.hasMany(Chatbot);

module.exports = User;
