const express = require("express");
const upload = require("./upload");
const mongoose = require("mongoose");
const auth = require("./middleware/auth");
const User = require("./models/userModel");
const UploadSchema = require("./models/uploadModel");
const sendMail = require("./sendMail");
const app = express();
app.use(express.json());
require("dotenv").config();

mongoose.connect(
  process.env.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
  }
);
app.use("/user", require("./routes/userRouter"));

app.post("/upload", upload.single("image"), async (req, res) => {
  const userEmail = req.body.userEmail;
  const user = await User.findOne({ userEmail });
  var path = __dirname + "/" + "images" + "/" + req.body.fileName;
  const Upload = new UploadSchema({
    user_id: user._id,
    image_path: path,
  });
  await Upload.save();
  sendMail(user.seniorEmail, user.email);
  res.send("Single file uploaded sucessfully...");
});

app.listen(5000, (err) => {
  if (err) console.log(err);
  console.log("server is started at port 5000");
});
