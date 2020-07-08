const express = require('express');
const {
  GetGyms,
  CreateGym,
  UpdateGym,
  GetGym,
  DeleteGym,
} = require('../controllers/GymController');
const router = express.Router();

router.route('/').get(GetGyms).post(CreateGym);
router.route('/:slug').get(GetGym).patch(UpdateGym).delete(DeleteGym);

module.exports = router;
