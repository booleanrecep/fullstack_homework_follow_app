const express = require("express");
const router = express.Router();
const { Homeworks } = require("../models/schemas");

router.get("/", async (req, res) => {
  try {
    const homeworks = await Homeworks.find({});
    res.send({ homeworks });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newHomework = await Homeworks.create({
      homeworkID: req.body.homeworkID,
      classroom: req.body.classroom,
      teacher: req.body.teacher,
      branch: req.body.branch,
      start: req.body.start,
      end: req.body.end,
      topic: req.body.topic,
      task: req.body.topic,
      image: req.body.image,
    });
    res.send({ newHomework });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
