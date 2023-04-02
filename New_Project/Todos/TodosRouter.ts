// import express, { Router, Request, Response } from "express";

// const todosRouter: Router = Router();
// /*
//  * url    : http://127.0.0.1:8080/api/user
//  * method : get
//  */
// todosRouter.get("/", (req: Request, res: Response) => {
//   res.json({
//     msg: "from todos router ",
//     url: req.baseUrl,
//     method: req.method,
//   });
// });
// /*
//  * url    : http://127.0.0.1:8080/api/user/register
//  * method : post
//  */
// todosRouter.post("/register", (req: Request, res: Response) => {
//   res.json({
//     msg: "from todos router ",
//     url: req.baseUrl,
//     method: req.method,
//   });
// });
// export default todosRouter;


// ===================================================================================================================================

import express, { Router, Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";

const todosRouter: Router = Router();

todosRouter.get("/", async (req, res) => {
  const todosJsonPath = path.join(__dirname, "..", "data", "todos.json");
  try {
    jsonfile.readFile(todosJsonPath, (err, obj) => {
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

export default todosRouter;
