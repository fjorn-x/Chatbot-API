const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const Conversation = require("./Conversation");

const ChatBot = sequelize.define(
  "chatbot",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {timestamps: false}
);

ChatBot.hasMany(Conversation);

module.exports = ChatBot;
