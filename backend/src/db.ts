import mongoose from "mongoose";

mongoose.connect(process.env.MongoURL || "mongodb://localhost:27017/dotByDev");

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

export { User };
