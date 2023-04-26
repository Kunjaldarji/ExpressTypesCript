import express, { Request, Response } from 'express';
import ejs from 'ejs';

const app: express.Application = express()


const hostname: string = "127.0.0.1";
const port: number = 8080;
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
    let model = { x: 1000, y: 20 };
    res.render("index", model);
});
app.get("/login", (req: Request, res: Response) => {
    let model = { uname: "dode", upwd: "dode@123" };
    res.render("login", model);
});

app.get("/student", (req: Request, res: Response) => {
    let model = {
        studentId: "S011",
        studentName: "Ramesh",
        studentMarks: 40,
        subject: [
            { name: "math", marks: "54" },
            { name: "science", marks: "53" },
            { name: "english", marks: "55" },
        ],
    };
    res.render("student", model);
})


app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});