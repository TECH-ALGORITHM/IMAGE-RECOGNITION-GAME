/*const mongoose = require("mongoose");
MONGODB_CONNECT_URI =
  "mongodb+srv://joy212ambuj:ambuj123456@login-new.jwizbr8.mongodb.net/merngg?retryWrites=true&w=majority&appName=login-new";

mongoose
  .connect(MONGODB_CONNECT_URI)
  .then(() => {
    console.log("connection success");
  })
  .catch((error) => console.log("failed   ++++" + error.message));*/
const mongoose = require("mongoose");
const connect = mongoose.connect(
  "mongodb+srv://joy212ambuj:ambuj123@cluster0.mfskt3b.mongodb.net/login-new?retryWrites=true&w=majority&appName=cluster0"
);

connect
  .then(() => {
    console.log("Database connected Succsessfully");
  })
  .catch(() => {
    console.log("Database connected succcessfully");
  });
const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const collection = new mongoose.model("user", loginSchema);
module.exports = collection;
