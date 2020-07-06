const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    name: {
      firstName: { type: String },
      lastName: { type: String },
    },
    birthday: Date,
    email: {
      type: String,
      required: [true, 'please provide an email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, `Please provide a password`],
      minlength: 8,
      select: false,
    },
    profileImage: { type: String, default: 'profile.jpg' },
    location: {
      type: String,
      default: 'Point',
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    body: {
      height: { type: Number, min: 130, max: 250 },
      weight: { type: Number, min: 40, max: 250 },
    },
    active: { type: Boolean, default: true, select: false },
    gym: {
      type: mongoose.Schema.ObjectId,
      ref: 'Gym',
    },
    preference: {
      Gymtype: String,
      equipment: String,
      staff: String,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual('age').get(function () {
  return Date.now() - this.birthday;
});

module.exports = mongoose.model('User', UserSchema);
