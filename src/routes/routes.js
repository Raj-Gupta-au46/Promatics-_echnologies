const Application = require("../Models/jobModel");
const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, skills, experience, phoneNumber, coverLetter } =
      req?.body;
    const resume = req?.file?.path;
    // console.log(req?.body);

    const newApplication = await Application.create({
      name,
      email,
      phoneNumber,
      skills: skills.split(","),
      experience: experience.split(","),
      resume,
      coverLetter,
      isSubmitted: true,
    });
    // console.log("newApplication", newApplication);
    // await newApplication.save();
    res.status(201).send("Application Submitted Successfully!");
  } catch (error) {
    res.status(500).send("Application Submission Error!");
  }
});

module.exports = router;
