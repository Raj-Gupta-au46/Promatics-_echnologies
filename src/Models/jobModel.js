const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    coverLetter: {
      type: String,
      required: true,
      trim: true,
    },
    skills: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    experience: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    resume: {
      type: String,
      required: true,
    },
    isSubmitted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", jobSchema);

module.exports = Application;
