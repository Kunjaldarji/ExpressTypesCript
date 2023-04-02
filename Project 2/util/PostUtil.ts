import jsonFile from "jsonfile";
import path from "path";
import { IPost } from "../Models/IUser";


export class UserUtil {
    private static postJsonPath = path.join(__dirname, "..", "data", "posts.json");
    public static getAllPost(): Promise<IPost[]> {
        return new Promise((resolve, reject) => {
            jsonFile.readFile(this.postJsonPath, (err, data) => {
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
