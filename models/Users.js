const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// Document Schema
const UserSchema = new mongoose.Schema(
  {
    name: {
      firstName: { type: String },
      lastName: { type: String },
    },
    birthdate: Date,
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
    passwordConfirm: {
      type: String,
      require: [true, `Please confirm your password`],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: `Password are not the same`,
      },
    },
    profileImage: { type: String, default: 'profile.jpg' },
    location: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinate: [Number],
      address: String,
      description: String,
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
      gymType: String,
      equipment: { type: Boolean, default: false },
      staff: { type: Boolean, default: false },
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual('age').get(function () {
  return Date.now() - this.birthdate;
});

UserSchema.pre('save', async function (next) {
  // this if statement will take effect if password has been modified in the update
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// instances method
UserSchema.methods.correctPassword = function (bodyPassword, userPassword) {
  return bcrypt.compare(bodyPassword, userPassword);
};

module.exports = mongoose.model('User', UserSchema);
