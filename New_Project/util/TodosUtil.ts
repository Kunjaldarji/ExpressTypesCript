import jsonFile from "jsonfile";
import path from "path";
import { ITodos } from "../Models/IUser";


export class UserUtil {
    private static todosJsonPath = path.join(__dirname, "..", "data", "todos.json");
    public static getAllTodos(): Promise<ITodos[]> {
        return new Promise((resolve, reject) => {
            jsonFile.readFile(this.todosJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            })
        })
    }
}
