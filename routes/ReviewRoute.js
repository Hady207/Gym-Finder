const express = require('express');
const reviewController = require('../controllers/ReviewController');
const { protect, restrictTo } = require('../controllers/AuthController');
const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route('/postReview')
  .post(reviewController.setGymUserId, reviewController.createReview);

router
  .route('/')
  .get(reviewController.getReviews)
  .post(
    restrictTo('user'),
    reviewController.setGymUserId,
    reviewController.createReview
  );

router.get('/myreviews', reviewController.getReviewForMyself);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(restrictTo('user', 'admin'), reviewController.updateReview)
  .delete(restrictTo('user', 'admin'), reviewController.deleteReview);

module.exports = router;
