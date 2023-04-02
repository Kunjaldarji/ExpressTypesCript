import jsonFile from "jsonfile";
import path from "path";
import { IAlbum } from "../Models/IUser";


export class UserUtil {
    private static albumJsonPath = path.join(__dirname, "..", "data", "albums.json");
    public static getAllAlbum(): Promise<IAlbum[]> {
        return new Promise((resolve, reject) => {
            jsonFile.readFile(this.albumJsonPath, (err, data) => {
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
