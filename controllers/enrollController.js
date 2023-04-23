const Program = require("../models/programSchema");
const Student = require("../models/studentSchema");
const Enroll = require("../models/enrollSchema");

const enrollStudent = async(req, res) => {
  const { StudentId, ProgramId, RegisterDate } = req.body;
  const p = { ProgramId: ProgramId };
  const s = { StudentId: StudentId };

  try {
    const student = await Student.findOne(s).exec();
    
    const program = await Program.findOne(p).exec();
    const s_ID = student._id.toString();
    const p_ID = program._id.toString();
    if ((!student || !program) && (!s_ID||p_ID)) {
      return res.status(404).json({ message: "Student or program not found" });
    } else {
      const enroll = new Enroll({
        s_ID,
        p_ID,
        RegisterDate,
      });
      await enroll
        .save()
        .then((data) => {
          res.status(200).json("new program added");
        })
        .catch((err) => {
          res.status(401).json(err);
        });
    }
  } catch (error) {
    
    res.status(500).json({ message: "Server error" });
  }
};
const allEnroll = (req, res) => {
  Enroll.find()
    .populate('s_ID', 'StudentName') 
    .populate('p_ID', 'ProgramName') 
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
module.exports = {
  enrollStudent,
  allEnroll,
};
