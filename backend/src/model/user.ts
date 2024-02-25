import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  contact: Number,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model("Users", userSchema);

export default User;