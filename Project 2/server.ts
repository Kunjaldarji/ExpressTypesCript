import express, { Application, Request, Response } from 'express'

import userRouter from './Users/UserRouter';
import albumRouter from './Albums/AlbumRouter';
import CommentRouter from './Comment/CommentRouter';
import postRouter from './Post/PostRouter';
import todosRouter from './Todos/TodosRouter';
// import todosRouter from './Todo/TodosRouter';





const app: express.Application = express()

const hostname: string = "127.0.0.1";
const port: number = 8082;

app.get("/", (req: Request, res: Response) => {
    // res.status(200);
    res.json({ msg: "Home Page" })
})
//Router Configuration
app.use("/user", userRouter)
app.use("/album",albumRouter)
app.use ("/comment",CommentRouter)
app.use("/post",postRouter)
app.use("/todo",todosRouter)
// app.get("/todo",todosRouter)


app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});