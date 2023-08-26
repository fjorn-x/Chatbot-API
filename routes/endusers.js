const router = require("express").Router();

const {createEndUser, getAllEndUsers, getEndUser, updateEndUser, deleteEndUser} = require("../controllers/endusers");

router.post("/", createEndUser);

router.get("/", getAllEndUsers);

router.get("/:endUserId", getEndUser);

router.put("/:endUserId", updateEndUser);

router.delete("/:endUserId", deleteEndUser);

module.exports = router;
