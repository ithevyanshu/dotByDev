import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MongoURL || "mongodb://localhost:27017/dotByDev");

app.use("/auth", authRoutes);

app.listen(process.env.PORT);