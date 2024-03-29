import express from "express";
import bcrypt from "bcrypt";
import { createUser } from "../utils/validation";
import User from "../model/user";
import { createAccessToken } from "../utils/token";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const user = req.body;
    user.role = "user";
    const parseInfo = createUser.safeParse(user);
    if (!parseInfo.success) {
      return res.status(400).json(parseInfo.error);
    }
    const existingEmail = await User.findOne({ email: user.email });
    const existingUsername = await User.findOne({ username: user.username });

    if (existingEmail) {
      return res.status(400).json("Email already exists");
    }
    if (existingUsername) {
      return res.status(400).json("Username already exists");
    }

    const hashPassword = bcrypt.hashSync(
      user.password,
      parseInt(process.env.SALT_ROUNDS || "10")
    );
    user.password = hashPassword;
    await User.create(user);

    res.json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json("Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(
      password || "",
      existingUser.password || ""
    );
    if (!passwordMatch) {
      return res.status(400).json("Invalid credentials");
    }
    delete existingUser.password;

    const accessToken = createAccessToken({ id: existingUser._id });
    res.send(accessToken);
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = router;
