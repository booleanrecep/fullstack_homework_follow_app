const express = require("express");
const router = express.Router();
const { Branches } = require("../models/schemas");

router.get("/", async (req, res) => {
  try {
    const branches = await Branches.find({});
    res.send({ branches });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBranch = await Branches.create({
      branchID: req.body.branchID,
      name: req.body.name,
      school: req.body.school,
      teacher: req.body.teacher,
      homeworks: req.body.homeworks,
      lessons: req.body.lessons,
    });
    res.send({ newBranch });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
