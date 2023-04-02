import { Request, Response } from "express";
import { IUser } from "../Models/IUser";
import { UserUtil } from "../util/UserUtil";





export const getAllUsers = async (request: Request, response: Response) => {

    try {
        let userData: IUser[] = await UserUtil.getAllUsers();
        return response.status(200).json(userData);
    }
    catch (err) {
        return response.status(500).json({
            msg: "Server Error"
        })
    }
}
