// import express, { Router, Request, Response } from "express";

// const postRouter: Router = Router();
// /*
//  * url    : http://127.0.0.1:8080/api/user
//  * method : get
//  */
// postRouter.get("/", (req: Request, res: Response) => {
//   res.json({
//     msg: "from post router ",
//     url: req.baseUrl,
//     method: req.method,
//   });
// });
// /*
//  * url    : http://127.0.0.1:8080/api/user/register
//  * method : post
//  */
// postRouter.post("/register", (req: Request, res: Response) => {
//   res.json({
//     msg: "from post router ",
//     url: req.baseUrl,
//     method: req.method,
//   });
// });
// export default postRouter;



// ===================================================================================================================

import express, { Router, Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";

const postRouter: Router = Router();

postRouter.get("/", async (req, res) => {
  const postsJsonPath = path.join(__dirname, "..", "data", "posts.json");
  try {
    jsonfile.readFile(postsJsonPath, (err, obj) => {
      if (err) console.log(err)
      res.json({ data: obj })
    })
    // return res.status(200).json({
    //     msg: "get all user",
    //     albumJsonPath : userJsonPath
    // })
  }
  catch (err) {
    return res.status(500).json({
      msg: "Server Error"
    })
  }
})

export default postRouter;

