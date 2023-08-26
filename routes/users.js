const router = require("express").Router();
const {createUser, listUsers, getUser, updateUser, deleteUser} = require("../controllers/users");
const {createChatbot, getAllChatbots} = require("../controllers/chatbots");

router.post("/", createUser);

router.get("/", listUsers);

router.get("/:id", getUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/:id/chatbots", createChatbot);

router.get("/:id/chatbots", getAllChatbots);

module.exports = router;
