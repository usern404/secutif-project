const {
  createLandTitle,
  deleteLandTitle,
  readLandTitle,
  readLandTitleById,
  updateLandTitle,
} = require('../models/landTitle');

const postLandController = (req, res) => {
  const data = req.body;
  createLandTitle(data, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result) {
      res.json({ success: 1, message: 'LandTitle created !' });
    }
  });
};

const getLandController = (_req, res) => {
  readLandTitle((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, payments: result });
    }
  });
};

const getLandByIdController = (req, res) => {
  const id = req.params.id;
  readLandTitleById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, payment: result[0] });
    }
  });
};

const patchLandController = (req, res) => {
  const data = req.body;
  updateLandTitle(data, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.affectedRows) {
      res.json({ success: 1, message: 'LandTitle updated !' });
    }
  });
};

const deleteLandController = (req, res) => {
  const id = req.params.id;
  deleteLandTitle(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'LandTitle deleted !' });
    }
  });
};

module.exports = {
  deleteLandController,
  patchLandController,
  getLandController,
  getLandByIdController,
  postLandController,
};
