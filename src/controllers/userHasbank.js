const {
  createUserHasBank,
  deleteUserHasBank,
  readUserHasBank,
  readUserHasBankById,
  updateUserHasBank,
} = require('../models/userHasbank.js');

const getUserHasBankController = (_req, res) => {
  readUserHasBank((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, users: result });
    }
  });
};

const getUserHasBankByIdController = (req, res) => {
  const id = req.params.id;
  readUserHasBankById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, user: result[0] });
    }
  });
};

const postUserHasBankController = (req, res) => {
  const data = req.body;
  createUserHasBank(data, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.affectedRows) {
      res.json({ success: 1, message: 'UserHasBank created !' });
    }
  });
};

const patchUserHasBankController = (req, res) => {
  const data = req.body;
  updateUserHasBank(data, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.affectedRows) {
      res.json({ success: 1, message: 'UserHasBank updated !' });
    }
  });
};

const deleteUserHasBankController = (req, res) => {
  const id = req.params.id;
  deleteUserHasBank(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'UserHasBank deleted !' });
    }
  });
};

module.exports = {
  deleteUserHasBankController,
  patchUserHasBankController,
  getUserHasBankController,
  getUserHasBankByIdController,
  postUserHasBankController,
};
