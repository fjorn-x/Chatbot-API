const router = require("express").Router();
const {getConversation, updateConversation, deleteConversation} = require("../controllers/conversations");

router.get("/:conversationId", getConversation);

router.put("/:conversationId", updateConversation);

router.delete("/:conversationId", deleteConversation);

module.exports = router;
