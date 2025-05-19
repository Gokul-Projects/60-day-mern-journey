import { userModel } from "@model/user.model";
import { Request } from "express";

export const createUser = ({name,email,password}:{name:string,email:string,password:string}) =>{
    const user = new userModel({name,email,password})
    return user.save()
}

export const getUserById = ({_id}:{_id:string})=>{
    return userModel.findById(_id)
}

export const getUserByData = ({email,password}:{email:string,password:string}) => {
    return userModel.findOne({email,password})
}