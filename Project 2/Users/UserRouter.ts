
import express, { Router, Request, Response } from "express";
import { UserUtil } from "../util/UserUtil";
import { Server } from "http";
import { IUser } from "../Models/IUser";
import * as userController from "../Controller/userController"

const userRouter: Router = Router();

/* 
// *   use : get single user
// * url    : http://127.0.0.1:8080/user/userId
// * method : get
// */

userRouter.get("/", async (req: Request, res: Response) => {
    await userController.getAllUsers(req, res)
})

userRouter.get("/:userName", async (req: Request, res: Response) => {
    await userController.getAllUsers(req, res);
})
export default userRouter;
