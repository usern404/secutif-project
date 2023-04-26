const { Router } = require('express');
const {
  deleteUserHasBankController,
  getUserHasBankByIdController,
  getUserHasBankController,
  patchUserHasBankController,
  postUserHasBankController,
} = require('../controllers/userHasbank.js');
// const { checkAuth } = require('../controllers/check-auth');

const router = Router();

router.post('/', postUserHasBankController);
router.get('/', getUserHasBankController);
router.get('/:id', getUserHasBankByIdController);
router.patch('/', patchUserHasBankController);
router.delete('/:id', deleteUserHasBankController);

module.exports = router;
