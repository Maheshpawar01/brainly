import mongoose, {model, Schema} from "mongoose"
import dotenv from "dotenv";
dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL as string;

mongoose.connect(MONGODB_URL)


//user schema
const UserSchema = new Schema({
    username:{type:String, unique:true},
    password:String
})

export const userModel = model("User", UserSchema)

//content schema

const ContentSchema = new Schema({
    title:String,
    link:String,
    type:String,
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}],
    userId:{type:mongoose.Types.ObjectId, ref:"User", required:true}
})

export const contentModel = model("Content", ContentSchema)

//links schema

const linkSchema = new Schema({
    hash:String,
    userId:{type: mongoose.Types.ObjectId, ref:"User", required:true, unique:true}
})

export const linkModel = model("Links", linkSchema)


