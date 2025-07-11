import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { contentModel, linkModel, userModel } from "./db";
import { userMiddleware } from "./middleware";
import { random } from "./utils";
import cors from "cors"
dotenv.config()

const JWT_PASSWORD = process.env.JWT_PASSWORD as string;
const FRONTEND_URL = process.env.FRONTEND_URL as string
app.use(express.json());
app.use(cors(

));

//start creating backend apis
app.post("/api/v1/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  try {
    await userModel.create({
      username: username,
      password: password,
      name:name,
    });

    res.status(200).json({
      name:name,
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
        name:existingUser.name,     
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

  await contentModel.deleteMany({
    contentId,
    //@ts-ignore
    userId: req.userId

  })
  res.json({
    message:"Deleted conten"
  })
});

app.post("/api/v1/brain/share", userMiddleware, async(req, res)=>{
  const share = req.body.share;
  if(share){
    const existingLink = await linkModel.findOne({
      userId : req.userId
    })

    if(existingLink){
      res.json({
        hash:existingLink.hash
      })
      return;
    }

    const hash = random(10);
    await linkModel.create({
      userId:req.userId,
      hash:hash
    })
      res.json({
    message:"/share/" + hash
  })
  }else{
    await linkModel.deleteOne({
      userId : req.userId
    })
      res.json({
    message:"Removed link"
  })
  }

})

app.get("/api/v1/brain/:shareLink", async(req, res)=>{
  const hash = req.params.shareLink;

  const link = await linkModel.findOne({
    hash
  })
  if(!link){
    res.status(411).json({
      message:"sorry incorrect input"
    })
    return;
  }

  //userId
  const content = await contentModel.find({
    userId: link.userId
  })

  // console.log(link)

  const user = await userModel.findOne({
    _id : link.userId
  })

  if(!user){
    res.status(411).json({
      message:"user not found, error should ideally not happen"
    })
    return;
  }

  res.json({
    username: user.username,
    content: content
  })

})

app.listen(3000);
