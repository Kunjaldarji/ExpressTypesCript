


// ===============================================================================================================

import express, { Router, Request, Response } from "express";


const userRouter: Router = Router();
/*
* url    : http://127.0.0.1:8080/api/user
* method : get
*/

userRouter.get("/", (req: Request, res: Response) => {

    res.json({
        msg: "from user router ",
        url: req.baseUrl,
        method: req.method
    })
})
/*
* url    : http://127.0.0.1:8080/api/user/register
* method : post
*/
userRouter.post("/register", (req: Request, res: Response) => {
    res.json({
        msg: "from user router ",
        url: req.baseUrl,
        method: req.method
    })
})
export default userRouter;

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

