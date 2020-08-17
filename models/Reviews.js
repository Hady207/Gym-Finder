const mongoose = require('mongoose');
const Gym = require('./Gyms');

const ReviewSchema = new mongoose.Schema(
  {
    review: { type: String, required: [true, 'Review can not be empty'] },
    rate: { type: Number, required: true, min: 1, max: 5 },
    gym: {
      type: mongoose.Schema.ObjectId,
      ref: 'Gym',
      required: [true, 'a review must belong to a gym'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'a review must belong to a user'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ReviewSchema.index({ gym: 1, user: 1 }, { unique: true });

ReviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name profileImage',
  });
  return next();
});

ReviewSchema.statics.calcAverageRatings = async function (gymId) {
  const stats = await this.aggregate([
    {
      $match: { gym: gymId },
    },
    {
      $group: {
        _id: '$gym',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rate' },
      },
    },
  ]);

  if (stats.length > 0) {
    await Gym.findByIdAndUpdate(gymId, {
      ratingsQuantity: stats[0].nRating,
      rate: stats[0].avgRating,
    });
  } else {
    await Gym.findByIdAndUpdate(gymId, {
      ratingsQuantity: 0,
      rate: 3.5,
    });
  }
};

ReviewSchema.post('save', function () {
  // this points to current review
  // this constructor = MODEL
  this.constructor.calcAverageRatings(this.gym);
});

// findByIdAndUpdate
// findByIdAndDelete
ReviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.findOne();
  next();
});

ReviewSchema.post(/^findOneAnd/, async function () {
  await this.r.constructor.calcAverageRatings(this.r.gym);
});

module.exports = mongoose.model('Review', ReviewSchema);
