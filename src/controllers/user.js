const {
  createUser,
  deleteUser,
  readUser,
  readUserById,
  updateUser,
} = require('../models/user.js');

const postUserController = (req, res) => {
  const data = req.body;
  createUser(data, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.affectedRows) {
      res.json({ success: 1, message: 'User created !' });
    }
  });
};

const getUserController = (_req, res) => {
  readUser((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, users: result });
    }
  });
};

const getUserByIdController = (req, res) => {
  const id = req.params.id;
  readUserById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, user: result[0] });
    }
  });
};

const patchUserController = (req, res) => {
  const data = req.body;
  updateUser(data, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.affectedRows) {
      res.json({ success: 1, message: 'User updated !' });
    }
  });
};

const deleteUserController = (req, res) => {
  const id = req.params.id;
  deleteUser(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'User deleted !' });
    }
  });
};

module.exports = {
  deleteUserController,
  patchUserController,
  getUserController,
  getUserByIdController,
  postUserController,
};
