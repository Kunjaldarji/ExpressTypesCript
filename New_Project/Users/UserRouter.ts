




// ==================================================== 21/03/2023 ==================================================================


// import express, { Router, Request, Response } from "express";
// import jsonfile from "jsonfile";
// import path from "path";

// const userRouter: Router = Router();

// userRouter.get("/", async (req, res) => {
//     const userJsonPath = path.join(__dirname, "..", "data", "users.json");
//     try {
//         jsonfile.readFile(userJsonPath,  (err, obj) => {
//             if(err) console.log(err)
//             res.json({ data: obj })
//         })
//         // return res.status(200).json({
//         //     msg: "get all user",
//         //     userJsonPath : userJsonPath
//         // })
//     }
//     catch (err) {
//         return res.status(500).json({
//             msg: "Server Error"
//         })
//     }
// })

// export default userRouter;


// =========================================================================================================================================

import express, { Router, Request, Response } from "express";
import { UserUtil } from "../util/UserUtil";
import { Server } from "http";
import { IUser } from "../Models/IUser";


const userRouter: Router = Router();

/* 
// *   use : get single user
// * url    : http://127.0.0.1:8080/user/userId
// * method : get
// */

userRouter.get("/", async (req: Request, res: Response) => {
    try {
        let userData: IUser[] = await UserUtil.getAllUsers();
        res.status(200).json(userData);
    }
    catch (err) {
        return res.status(500).json({
            msg: "Server Error"
        })
    }
})
// userRouter.get("/:userId", async (req: Request, res: Response) => {
//     try {
//         let { userId } = req.params;
//         console.log(req.params);
//         let userData: IUser | undefined = await UserUtil.getUser(Number(userId));
//         if (userData)
//             res.status(200).json(userData);
//     }
//     catch (err) {
//         return res.status(500).json({
//             msg: "Server Error"
//         })
//     }
// })

userRouter.get("/:userName",async(req:Request,res:Response) => {
    try {
        let {userName} = req.params;
        console.log (req.params);
        let userData:IUser | undefined = await UserUtil.getUser(String(userName));
        if (userData)
        res.status(200).json(userData);
    }
    catch(err){
        return res.status(500).json({
            msg :"Server Error"
        })
    }
})
export default userRouter;