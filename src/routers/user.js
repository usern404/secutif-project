const { Router } = require('express');
const {
  deleteUserController,
  getUserByIdController,
  getUserController,
  patchUserController,
  postUserController,
} = require('../controller/user');
// const { checkAuth } = require('../controllers/check-auth');

const router = Router();

router.post('/', postUserController);
router.get('/', getUserController);
router.get('/:id', getUserByIdController);
router.patch('/', patchUserController);
router.delete('/:id', deleteUserController);

module.exports = router;
