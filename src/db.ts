import mongoose, {model, Schema} from "mongoose"

mongoose.connect("mongodb://localhost:27017/brainly")

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
    tags:[{type:mongoose.Types.ObjectId, ref:'Tag'}],
    userId:{type:mongoose.Types.ObjectId, ref:"User", required:true}
})

export const contentModel = model("Content", ContentSchema)

