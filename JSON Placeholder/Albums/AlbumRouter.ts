// import express, { Router, Request, Response } from "express";

// const albumRouter: Router = Router();
// /*
//  * url    : http://127.0.0.1:8080/api/user
//  * method : get
//  */
// albumRouter.get("/", (req: Request, res: Response) => {
//   res.json({
//     msg: "from album router ",
//     url: req.baseUrl,
//     method: req.method,
//   });
// });
// /*
//  * url    : http://127.0.0.1:8080/api/user/register
//  * method : post
//  */
// albumRouter.post("/register", (req: Request, res: Response) => {
//   res.json({
//     msg: "from album router ",
//     url: req.baseUrl,
//     method: req.method,
//   });
// });
// export default albumRouter;

// ===============================================================================================================================
// ==================================================== 21/03/2023 ==============================================================


import express, { Router, Request, Response } from "express";
import jsonfile from "jsonfile";
import path from "path";

const albumRouter: Router = Router();

albumRouter.get("/", async (req, res) => {
  const albumJsonPath = path.join(__dirname, "..", "data", "albums.json");
  try {
    jsonfile.readFile(albumJsonPath, (err, obj) => {
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

export default albumRouter;
