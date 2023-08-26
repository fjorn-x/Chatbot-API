const User = require("../models/User");
const Chatbot = require("../models/ChatbotModel");

async function createChatbot(req, res) {
  try {
    const userId = req.params.id;
    const chatbot = await Chatbot.create({
      name: req.body.name,
      userId: userId,
    });
    return res.status(201).json(`${chatbot.name} created successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function getAllChatbots(req, res) {
  try {
    const userId = req.params.id;
    const chatbots = await Chatbot.findAll({where: {userId: userId}});
    return res.status(200).json(chatbots);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function getChatbot(req, res) {
  try {
    const chatbotId = req.params.chatbotId;
    const chatbot = await Chatbot.findOne({where: {id: chatbotId}});
    return res.status(200).json(chatbot);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function updateChatbot(req, res) {
  try {
    const chatbotId = req.params.chatbotId;
    const chatbot = await Chatbot.findOne({where: {id: chatbotId}});
    chatbot.name = req.body.name;
    await chatbot.save();
    return res.status(200).json(`${chatbot.name} : Updated name successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function deleteChatbot(req, res) {
  try {
    const chatbotId = req.params.chatbotId;
    const chatbot = await Chatbot.findOne({where: {id: chatbotId}});
    await chatbot.destroy();
    return res.status(200).json(`${chatbot.name} deleted successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

module.exports = {createChatbot, getAllChatbots, getChatbot, updateChatbot, deleteChatbot};
