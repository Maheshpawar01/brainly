import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { contentModel, userModel } from "./db";
import dotenv from "dotenv"
import { userMiddleware } from "./middleware";

dotenv.config()
const JWT_PASSWORD = process.env.JWT_PASSWORD as string;
console.log(JWT_PASSWORD)

app.use(express.json());

//start creating backend apis
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
  } catch (error) {
    res.status(403).json({
      message:"incoreect credentials"
    })
  }
});
app.post("/api/v1/content", userMiddleware, (req, res) => {
    const link = req.body.link
    const type = req.body.type;
    contentModel.create({
      link,
      type,
      //@ts-ignore
      userId: req.userId,
      tags:[]
    })
    res.json({
      message:"content created"
    })
 
});
app.get("/api/v1/content", userMiddleware, async(req, res) => {
  //@ts-ignore
  const userId = req.userId;
  const content = await contentModel.find({
    userId:userId
  }).populate("userId", "username")
  res.json({
    content
  })
});
app.delete("/api/v1/content",userMiddleware, async(req, res) => {
  const contentId = req.body.contentId;
  console.log(contentId)

  await contentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.userId

  })
  res.json({
    message:"Deleted"
  })
});

app.listen(3000);
