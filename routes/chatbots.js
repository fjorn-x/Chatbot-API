const router = require("express").Router();

const {getChatbot, updateChatbot, deleteChatbot} = require("../controllers/chatbots");
const {createConversation, getAllConversations} = require("../controllers/conversations");

router.get("/:chatbotId", getChatbot);

router.put("/:chatbotId", updateChatbot);

router.delete("/:chatbotId", deleteChatbot);

router.post("/:chatbotId/conversations", createConversation);

router.get("/:chatbotId/conversations", getAllConversations);

module.exports = router;
