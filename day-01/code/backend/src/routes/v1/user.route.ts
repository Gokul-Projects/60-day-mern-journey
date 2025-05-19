import express from "express";
import * as UserController from '@controller/user.controller'

const userRoute = express.Router();

const userRoutePath = 'user'

userRoute.post('/register', UserController.registerUserController);
userRoute.post('/login', UserController.loginUserController);
userRoute.get('/me', UserController.getMeUserController);

export default {path:userRoutePath,route:userRoute}