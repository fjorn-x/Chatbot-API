const EndUser = require("../models/Enduser");

async function createEndUser(req, res) {
  try {
    const {username, email} = req.body;
    const user = await EndUser.create({username, email});
    return res.status(201).json({message: `End User ${user.username} created successfully`});
  } catch (e) {
    return res.status(500).json({message: e.stack});
  }
}

async function getAllEndUsers(req, res) {
  try {
    const users = await EndUser.findAll();
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function getEndUser(req, res) {
  try {
    const id = req.params.endUserId;
    const user = await EndUser.findOne({where: {id: id}});
    if (user == null) {
      return res.status(404).json("user not found");
    }
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function updateEndUser(req, res) {
  try {
    const id = req.params.endUserId;
    const user = await EndUser.findOne({where: {id: id}});

    if (req.body.username != null) {
      user.username = req.body.username;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }

    await user.save();
    return res.status(200).json(`${user.username} : Updated Successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function deleteEndUser(req, res) {
  try {
    const id = req.params.endUserId;
    const user = await EndUser.findOne({where: {id: id}});
    await user.destroy();
    return res.status(200).json(`${user.username} : Deleted successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

module.exports = {createEndUser, getAllEndUsers, getEndUser, updateEndUser, deleteEndUser};
