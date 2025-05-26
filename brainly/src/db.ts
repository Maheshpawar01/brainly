import mongoose, {model, Schema} from "mongoose"

mongoose.connect("mongodb+srv://maheshp8767:fDxjzQtFsQ630hc6@cluster0.d9hnqbb.mongodb.net/")

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


