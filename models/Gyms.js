const mongoose = require("mongoose");

const GymSchema = new mongoose.Schema(
  {
    GymName: String,
    slug: { type: String, lowercase: true, unique: true },
    subscriptionRates: [String],
    headerImage: String,
    images: [String],
    description: String,
    rate: {
      type: Number,
      min: 1,
      max: 5,
    },
    location: [{}], // embedding document
    subscribers: [], //referenced here
    reviews: [], // referenced here
    admin: {}, // referenced user
    dataAnalyst: [],
    type: String,
    equipment: String,
    staff: [String],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

module.exports = mongoose.model("Gym", GymSchema);
