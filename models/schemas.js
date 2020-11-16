const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacherID: String,
  name: String,
  branch: String,
  school: String,
  photo: String,
  homeworks: Array,
  classrooms: Array,
});
const schoolSchema = new mongoose.Schema({
  schoolID: String,
  image: String,
  name: String,
  teachers: Array,
  studenets: Array,
  branches: Array,
  classrooms: Array,
  homeworks: Array,
});
const branchSchema = new mongoose.Schema({
  branchID: String,
  name: String,
  school: String,
  teacher: String,
  homeworks: Array,
  lessons: Array,
});
const classroomSchema = new mongoose.Schema({
  classroomID: String,
  name: String,
  image: String,
  teachers: Array,
  students: Array,
  homeworks: Array,
});
const homeworkSchema = new mongoose.Schema({
  homeworkID: String,
  classroom: String,
  teacher: String,
  branch: String,
  start: Date,
  end: Date,
  topic: String,
  task: String,
  image: String,
});
const dataSchema = mongoose.Schema({
  branches: Array,
  schools: Array,
  schools: Array,
  teachers: Array,
  classrooms: Array,
  homeworks: Array,
});

const DATA = mongoose.model("dummy_data", dataSchema);

module.exports = {
  Teachers: mongoose.model("teacher", teacherSchema),
  Schools: mongoose.model("school", schoolSchema),
  Branches: mongoose.model("branch", branchSchema),
  Classrooms: mongoose.model("classroom", classroomSchema),
  Homeworks: mongoose.model("homework", homeworkSchema),
};
