const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const programSchema = new Schema({
    ProgramId: { 
        type: Number,
        required: true,
        unique: true
      },
    ProgramName: {
        type: "String",
        required: "true"
    },
    ProgramDuration: {
        type: "String",
        required: "true"
    },
    ProgramCost: {
        type: "String",
        required: "true"
    }
});


const program = mongoose.model('Program', programSchema);
module.exports = program