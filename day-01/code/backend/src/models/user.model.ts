import mongoose from "mongoose";
import {v4} from 'uuid'

const modelName = "User"

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    name: String,
    email: String,
    password: String,
    bio: String,
    avatar: String,
},{timestamps:true, collection:modelName});

export const userModel = mongoose.model(modelName, userSchema)