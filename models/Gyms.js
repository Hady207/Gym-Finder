const mongoose = require('mongoose');
const slugify = require('slugify');
const GymSchema = new mongoose.Schema(
  {
    gymName: String,
    slug: { type: String, lowercase: true, unique: true },
    memberships: { type: Map, of: Number },
    headerImage: String,
    images: [String],
    summary: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    website: String,
    rate: [
      {
        equipmentRating: {
          type: Number,
          min: [1, 'Rating must be above 1.0'],
          max: [5, 'Rating must be below 5.0'],
          default: 3.5,
          set: (v) => Math.round(v * 10) / 10,
        },
        staffRating: {
          type: Number,
          min: [1, 'Rating must be above 1.0'],
          max: [5, 'Rating must be below 5.0'],
          default: 3.5,
          set: (v) => Math.round(v * 10) / 10,
        },
        valueRating: {
          type: Number,
          min: [1, 'Rating must be above 1.0'],
          max: [5, 'Rating must be below 5.0'],
          default: 3.5,
          set: (v) => Math.round(v * 10) / 10,
        },
      },
    ],
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinate: [Number],
        address: String,
        description: String,
      },
    ], // embedding document
    subscribers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }], //referenced here
    moderators: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ], // referenced user
    gymType: {
      type: 'String',
      enum: ['crossfit', 'iron', 'health'],
      required: true,
    },
    facilities: [String],
    classes: [String],
    staff: [
      {
        profile: String,
        name: String,
        speciality: String,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

GymSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'gym',
});

// Document middleware
GymSchema.pre('save', function (next) {
  this.slug = slugify(this.GymName, { lower: true });
  next();
});

// Query Middleware
GymSchema.pre(/^find/, function (next) {
  this.populate('moderators');
  next();
});

module.exports = mongoose.model('Gym', GymSchema);
