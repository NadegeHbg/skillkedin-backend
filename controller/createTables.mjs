import mongoose from "mongoose";
const skillkedin = new mongoose.Schema({

    category: {
      type: String,
      required: true,
    },
    questions: {
        type: Array,
        required: true,
    }
  },
);
 const skillkedin_model = mongoose.model("skillkedin", skillkedin);
 export default skillkedin_model;