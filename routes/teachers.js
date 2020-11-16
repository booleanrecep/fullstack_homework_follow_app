const express = require("express");
const router = express.Router();
const { Teachers } = require("../models/schemas");

router.get("/", async (req, res) => {
  try {
    const teachers = await Teachers.find({});
    res.send({ teachers });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});
router.get("/:id",async(req,res)=>{
  try {
    const teacher = await Teachers.findById(req.params.id);
    res.send({ teacher });
  } catch (err) {
    res.status(404).send({ message: 'Teacher not found!' });
  }
})
router.put('/:id', async (req, res) => {
  try {
    const updatedTeacher = await Teachers.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The teacher was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const removeTeacher = await Teachers.findByIdAndRemove(req.params.id);
     res.send({ message: 'The teacher was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTeacher = await Teachers.create({
      teacherID: req.body.teacherID,
      name: req.body.name,
      branch: req.body.branch,
      school: req.body.school,
      photo: req.body.photo,
      homeworks: req.body.homeworks,
      classrooms: req.body.classrooms,
    });
    res.send({ newTeacher });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
