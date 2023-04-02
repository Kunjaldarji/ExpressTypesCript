// import express, { Router,Request,Response } from "express";

// const commentRouter :Router = Router();
// /*
// * url    : http://127.0.0.1:8080/api/user
// * method : get  
// */
// commentRouter.get("/",(req:Request,res:Response)=>{

//     res.json({
//         msg:"from comment router ",
//         url:req.baseUrl,
//         method:req.method
//     })  
// })
// /*
// * url    : http://127.0.0.1:8080/api/user/register
// * method : post
// */
// commentRouter.post("/register",(req:Request,res:Response)=>{
//     res.json({
//         msg:"from comment router ",
//         url:req.baseUrl,
//         method:req.method
//     })
// })
// export default commentRouter;

// ==============================================================================================================================



import express, { Router, Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";

const CommentRouter: Router = Router();

CommentRouter.get("/", async (req,res) => {
    const commentJsonPath = path.join(__dirname, "..", "data", "comments.json");
    try {
        jsonfile.readFile(commentJsonPath, (err, obj) => {
            if (err) console.log(err)
            res.json({ data: obj })
        })
        // return res.status(200).json({
        //     msg: "get all user",
        //     commentJsonPath : userJsonPath
        // })
    }
    catch (err) {
        return res.status(500).json({
            msg: "Server Error"
        })
    }
})

export default CommentRouter;
