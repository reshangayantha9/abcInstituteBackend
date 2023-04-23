const Student = require("../models/studentSchema");


const studentSave =  async(req, res) => {
  const { StudentId,StudentName, StudentAddress, StudentContact } = req.body;
  const student = new Student({
    StudentId,
    StudentName,
    StudentAddress,
    StudentContact,
  });

   await student
    .save()
    .then((data) => {
      res.status(200).json("new studend added");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
const allStudents = async(req, res) => {
     await Student.find()
        .then((data) => { res.status(200).json(data) })
        .catch((err) => { res.status(401).json(err) })
}
const studentUpdate =(req, res) => {
    const filter = { StudentId: req.params.id };
    const { StudentName, StudentAddress, StudentContact } = req.body;
    const updateStudent = {
        StudentName,
        StudentAddress,
        StudentContact,
    }    
    const update = Student.findOneAndUpdate(filter, updateStudent)
        .then(() => {
            res.status(200).json({ status: "Update Success", data: update })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ status: "Updated error" })
        })
}
const studentDelete =(req, res) => {
    const filter = { StudentId: req.params.id };
    const Delete = Student.findOneAndDelete(filter)
        .then(() => {
            res.status(200).json({ status: "delete completed", data: Delete })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                status: "delete faild",
                data: err
            })
        })
}
const studentFind = (req, res) => {
    const filter = { StudentId: req.params.id };
    const user = Student.findOne(filter)
    .then((data) => { res.status(200).json(data) })
    .catch((err) => { res.status(401).json(err) })
}
module.exports = { studentSave,allStudents,studentUpdate,studentDelete,studentFind};
