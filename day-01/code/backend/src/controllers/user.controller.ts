import { catchAsync } from "@utils/catchAsync.utils";
import { Request, Response } from "express";
import * as UserService from "@service/user.service"

export const registerUserController = catchAsync(async (req:Request, res:Response) =>{
    const { name, email, password } = req.body;
    const user = await UserService.createUser({ name, email, password });
    res.status(201).json({ message: "Registration success", data: user });
})

export const getMeUserController = catchAsync(async (req:Request, res:Response) =>{
    const { _id } = req.body;
    const user = await UserService.getUserById(_id)
    res.status(200).json({ message: "Fetched user successfully", data: user });
})

export const loginUserController = catchAsync(async (req:Request, res:Response) =>{
    const { email, password } = req.body;
    const user = await UserService.getUserByData({ email, password });
    res.status(200).json({ message: "Login success", data: user });
})