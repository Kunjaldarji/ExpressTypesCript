import jsonFile from "jsonfile";
import path from "path";
import { IComment } from "../Models/IUser";


export class UserUtil {
    private static commentJsonPath = path.join(__dirname, "..", "data", "comments.json");
    public static getAllComment(): Promise<IComment[]> {
        return new Promise((resolve, reject) => {
            jsonFile.readFile(this.commentJsonPath, (err, data) => {
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
