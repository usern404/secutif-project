const { createBank, readBankByEmail, readBank } = require('../models/bank');
const { ErrorHandling } = require('../error/ErrorHandling');
const { tokenGenerator } = require('../utils/tokenGenerator');
const { isHash } = require('../utils/compareHash');

const postBankController = (req, res) => {
  const body = req.body;
  createBank(body, (err, result) => {
    if (err) {
      const error = ErrorHandling(err);
      res.json(error);
    } else {
      const token = tokenGenerator(result.id);
      res.json({ success: 1, token, user: result, message: 'Bank crée' });
    }
  });
};

const getBankByEmailController = (req, res) => {
  const body = req.body;
  // console.log(body.email),
  // console.log(body.hash),
  readBankByEmail(body, async (err, result) => {
    if (err) {
      const error = ErrorHandling(err);
      res.json(error);
    } else {
      if (!result) {
        res.json({ success: 1, code: 'USER_NOT_FOUND' });
        return;
      }
      const isMatch = await isHash(body.hash, result.hash);
      if (!isMatch) {
        res.json({ success: 1, code: 'WRONG_PASSWORD' });
        return;
      }
      const token = tokenGenerator(result.id);
      res.json({ success: 1, token, user: result, message: 'Bank connecté' });
    }
  });
};

const getBankController = (_req, res) => {
  readBank((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, banks: result });
    }
  });
};

module.exports = {
  postBankController,
  getBankByEmailController,
  getBankController,
};
