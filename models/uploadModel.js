const mongoose = require("mongoose");
const uploadSchema = new mongoose.Schema({
  user_id: {
    type: Object,
    required: true
  },
  image_path: {
    type: String,
    required: true,
    trim: true,
  }
});
module.exports = mongoose.model("imagesPosted", uploadSchema);
