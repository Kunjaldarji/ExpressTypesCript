import express ,{Application,Request,Response} from 'express'
import albumRouter from './Albums/AlbumRouter';
import commentRouter from './Comment/CommentRouter';
import userRouter from './Users/UserRouter';
import postRouter from './Post/PostRouter';
import todosRouter from './Todos/TodosRouter';




const app:express.Application = express()

const hostname :string = "127.0.0.1";
const port:number = 8082;

app.get("/",(req:Request,res:Response)=>{
    // res.status(200);
    res.json({msg:"Home Page"})
})
//Router Configuration
app.use("/user",userRouter),
app.use("/comment",commentRouter),
app.use("/album",albumRouter),
app.use("/post",postRouter),
app.use("/todos",todosRouter)

app.listen(port,hostname,()=>{
    console.log(`Server started at http://${hostname}:${port}`);
});