const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const EndUser = require("./Enduser");

const Conversation = sequelize.define(
  "conversation",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {timestamps: false}
);

Conversation.hasOne(EndUser);

module.exports = Conversation;
