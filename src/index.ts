import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { userModel } from "./db";
import dotenv from "dotenv"

dotenv.config()
const JWT_PASSWORD = process.env.JWT_PASSWORD as string;
console.log(JWT_PASSWORD)

app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    await userModel.create({
      username: username,
      password: password,
    });

    res.json({
      message: "user signed up",
    });
  } catch (error) {
    res.status(411).json({
      message: "User alread exists",
    });
  }
});
app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const existingUser = await userModel.findOne({
      username,
      password,
    });
    if (existingUser) {
      const token = jwt.sign(
        {
          id: existingUser._id,
        },
        JWT_PASSWORD
      );

      res.json({
        token,
      });
    } else {
      res.status(403).json({
        message: "incorrect credentials",
      });
    }
  } catch (error) {}
});
app.post("/api/v1/cotent", async(req, res) => {
    const link = req.body.link,
    const type = req.body.type,

});
app.get("/api/v1/content", (req, res) => {});
app.delete("/api/v1/content", (req, res) => {});

app.listen(3000);
