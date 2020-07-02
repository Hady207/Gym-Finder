const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    review: { type: String, required: [true, "Review can not be empty"] },
    rate: { type: Number, required: true, min: 1, max: 5 },
    gym: {
      type: mongoose.Schema.ObjectId,
      ref: "Gym",
      required: [true, "a review must belong to a gym"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "a review must belong to a user"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

module.exports = mongoose.model("Review", ReviewSchema);
