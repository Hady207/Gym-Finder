const express = require('express');
const ReviewRouter = require('../routes/ReviewRoute');
const {
  GetGyms,
  GetRecommenedGym,
  GetGym,
  CreateGym,
  UpdateGym,
  DeleteGym,
} = require('../controllers/GymController');
const router = express.Router();

router.use('/:gymId/review', ReviewRouter);

// www.gymfinder.com/api/v1/gyms/
// www.gymfinder.com/api/v1/gyms/golds-gym
router.route('/').get(GetGyms).post(CreateGym);
router.route('/widget').post(GetRecommenedGym);
router.route('/:slug').get(GetGym).patch(UpdateGym).delete(DeleteGym);

module.exports = router;
