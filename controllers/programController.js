const Program = require("../models/programSchema");

const ProgramSave = (req, res) => {
  const { ProgramId, ProgramName, ProgramDuration, ProgramCost } = req.body;
  const program = new Program({
    ProgramId,
    ProgramName,
    ProgramDuration,
    ProgramCost,
  });

   program.save()
    .then((data) => {
      res.status(200).json("new program added");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
const allPrograms =  (req, res) => {
  Program.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
const ProgramUpdate = (req, res) => {
  const filter = { ProgramId: req.params.id };
  const {  ProgramName, ProgramDuration, ProgramCost} = req.body;
  const updateProgram = {
    ProgramName, 
    ProgramDuration,
    ProgramCost
  };
  const update = Program.findOneAndUpdate(filter, updateProgram)
    .then(() => {
      res.status(200).json({ status: "Update Success", data: update });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "Updated error" });
    });
};
const ProgramDelete =  (req, res) => {
  const filter = { ProgramId: req.params.id };
  const Delete =  Program.findOneAndDelete(filter)
    .then(() => {
      res.status(200).json({ status: "delete completed", data: Delete });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        status: "delete faild",
        data: err,
      });
    });
};
const ProgramFind = (req, res) => {
  const filter = { ProgramId: req.params.id };
  const user =  Program.findOne(filter)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};
module.exports = {
  ProgramSave,
  allPrograms,
  ProgramUpdate,
  ProgramDelete,
  ProgramFind,
};
