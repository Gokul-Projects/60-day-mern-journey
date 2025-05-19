import express from "express";
import userRoute from "./user.route";
const router = express.Router();

const availableRoutes = [
    userRoute
];

for(let {path,route} of availableRoutes){
    router.use(`/${path}`, route);
}

export default router