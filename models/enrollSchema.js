const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const enrollSchema = new Schema({
  s_ID: { 
    type: Schema.Types.ObjectId,
    ref: "Student" 
    },
  p_ID: { 
    type: Schema.Types.ObjectId, 
    ref: "Program" 
    },
RegisterDate: {
    type: "String",
    required: true,
  }
});

const enroll = mongoose.model("Enroll", enrollSchema);

module.exports = enroll;
