const User = require("../models/User");

async function createUser(req, res) {
  try {
    const {username, email} = req.body;
    const user = await User.create({username, email});
    return res.status(201).json({message: `User ${user.username} created successfully`});
  } catch (e) {
    return res.status(500).json({message: e.stack});
  }
}

async function listUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function getUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findOne({where: {id: id}});
    if (user == null) {
      return res.status(404).json("user not found");
    }
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findOne({where: {id: id}});

    if (req.body.username != null) {
      user.username = req.body.username;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }
    await user.save();
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.findOne({where: {id: id}});
    await user.destroy();
    return res.status(200).json(`${user.username} deleted successfully`);
  } catch (e) {
    return res.status(500).json({message: e.message});
  }
}

module.exports = {createUser, listUsers, getUser, updateUser, deleteUser};
