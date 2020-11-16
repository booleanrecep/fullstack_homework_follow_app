const express = require("express");
const router = express.Router();
const { Classrooms } = require("../models/schemas");

router.get("/", async (req, res) => {
  try {
    const classrooms = await Classrooms.find({});
    res.send({ classrooms });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newClassroom = await Classrooms.create({
      classroomID: req.body.classroomID,
      name: req.body.name,
      image: req.body.image,
      teachers: req.body.teachers,
      students: req.body.students,
      homeworks: req.body.homeworks,
    });
    res.send({ newClassroom });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
