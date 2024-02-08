import express from "express";
import { User } from "./db";
import bcrypt from "bcrypt";

const saltRounds = 10;
const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = req.body;
    const existingEmail = await User.findOne({ email: user.email });
    const existingUsername = await User.findOne({ username: user.username });

    if (existingEmail) {
      return res.status(400).json("Email already exists");
    }
    if (existingUsername) {
      return res.status(400).json("Username already exists");
    }

    const hashPassword = bcrypt.hashSync(user.password, saltRounds);
    user.password = hashPassword;
    await User.create(user);

    res.json({ msg: "User created successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json("Invalid credentials");
    }

    const existingPassword = existingUser.password || "";

    const passwordMatch = await bcrypt.compare(
      password || "",
      existingPassword
    );

    if (!passwordMatch) {
      return res.status(400).json("Invalid credentials");
    }

    res.send("User logged in successfully");
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
