const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const studentSchema = new Schema({
  StudentId: {
    type: Number,
    required: true,
    unique: true,
  },
  StudentName: {
    type: "String",
    required: "true",
  },
  StudentAddress: {
    type: "String",
    required: "true",
  },
  StudentContact: {
    type: "String",
    required: "true",
  },
});

const student = mongoose.model("Student", studentSchema);
module.exports = student;
