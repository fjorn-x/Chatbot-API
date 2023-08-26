const Conversation = require("../models/Conversation");

async function getConversation(req, res) {
  try {
    const conversationId = req.params.conversationId;
    const conversation = await Conversation.findOne({where: {id: conversationId}});
    return res.status(200).json(conversation);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function updateConversation(req, res) {
  try {
    const conversationId = req.params.conversationId;
    const conversation = await Conversation.findOne({where: {id: conversationId}});
    conversation.name = req.body.name;
    await conversation.save();
    return res.status(200).json(`${conversation.name} : Updated name successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function deleteConversation(req, res) {
  try {
    const conversationId = req.params.conversationId;
    const conversation = await Conversation.findOne({where: {id: conversationId}});
    await conversation.destroy();
    return res.status(200).json(`${conversation.name} deleted successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function createConversation(req, res) {
  try {
    const chatbotId = req.params.chatbotId;
    const conversation = await Conversation.create({
      name: req.body.name,
      chatbotId: chatbotId,
    });
    return res.status(201).json(`${conversation.name} created successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function getAllConversations(req, res) {
  try {
    const id = req.params.chatbotId;
    const conversations = await Conversation.findAll({where: {chatbotId: id}});
    return res.status(200).json(conversations);
  } catch (e) {
    return res.status(500).json({message: e.stack});
  }
}

module.exports = {getConversation, updateConversation, deleteConversation, createConversation, getAllConversations};
