const { Router } = require('express');
const {
  postBankController,
  getBankByEmailController,
  getBankController,
} = require('../controllers/bank');

const router = Router();

router.post('/register', postBankController);
router.get('/login', getBankByEmailController);
router.get('/', getBankController);

module.exports = router;
