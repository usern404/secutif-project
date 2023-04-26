const { Router } = require('express');
const {
  deleteLandController,
  getLandByIdController,
  getLandController,
  patchLandController,
  postLandController,
} = require('../controller/landTitle');
// const { checkAuth } = require('../controllers/check-auth');

const router = Router();

router.post('/', postLandController);
router.get('/', getLandController);
router.get('/:id', getLandByIdController);
router.patch('/:id', patchLandController);
router.delete('/:id', deleteLandController);

module.exports = router;
