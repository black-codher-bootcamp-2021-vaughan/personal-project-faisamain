const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema(
{
  _id: String,
  title: String,
  question_1: String,
  question_2: String,
  question_3: String,
  question_4: String,
});


mongoose.model("surveys", profileSchema);
