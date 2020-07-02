const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      firstName: { type: String },
      lastName: { type: String },
    },
    age: Number,
    email: {
      type: String,
      required: [true, "please provide an email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, `Please provide a password`],
      minlength: 8,
      select: false,
    },
    profileImage: { type: String, default: "profile.jpg" },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    body: {
      height: { type: Number, min: 130, max: 250 },
      weight: { type: Number, min: 40, max: 250 },
    },
    active: { type: Boolean, default: true, select: false },
    gym: {
      type: mongoose.Schema.ObjectId,
      ref: "Gym",
    },
    preference: {
      Gymtype: String,
      equipment: String,
      staff: String,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

module.exports = mongoose.model("User", UserSchema);
