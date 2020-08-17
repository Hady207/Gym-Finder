const Review = require('../models/Reviews');
const AppError = require('../util/AppError');

exports.setGymUserId = (req, res, next) => {
  req.body.user = req.user.id;
  req.body.gym = req.params.gymId;
  next();
};

// for the admin
exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({
      status: 'success',
      data: {
        reviews,
      },
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

// for the admin
exports.getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        review,
      },
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

exports.createReview = async (req, res, next) => {
  try {
    console.log(req.body);
    const review = await Review.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        review,
      },
    });
  } catch (error) {
    next(new AppError(error, 404));
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        review: updatedReview,
      },
    });
  } catch (error) {
    next(new AppError(error.message, 404));
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const deleteReview = await Review.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      message: 'Data has been deleted',
      data: null,
    });
  } catch (error) {
    return next(new AppError(error.message, 404));
  }
};
