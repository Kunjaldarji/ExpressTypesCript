import jsonFile from "jsonfile";
import path, { resolve } from "path";
import { IUser } from "../Models/IUser";
import { promises } from "dns";
import { rejects } from "assert";


export class UserUtil {
    private static userJsonPath = path.join(__dirname, "..", "data", "users.json");

    public static getAllUsers(): Promise<IUser[]> {
        return new Promise((resolve, reject) => {
            jsonFile.readFile(this.userJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            })
        })
    }

    // public static getUser(userId: Number): Promise<IUser | undefined> {
    //     return new Promise((resolve, reject) => {
    //         jsonFile.readFile(this.userJsonPath, (err, data) => {
    //             if (err) {
    //                 reject(err);
    //             }
    //             else {
    //                 let userList: IUser[] = data;
    //                 let user: IUser | undefined = userList.find(item => item.id === userId)
    //                 resolve(user);
    //             }
    //         })
    //     })
    // }


    
    public static getUser(userName: string): Promise<IUser | undefined> {
        return new Promise((resolve , reject) => {
            jsonFile.readFile(this.userJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    let userList: IUser[] = data;
                    let user: IUser | undefined = userList.find(item => item.name === userName)
                    resolve(user);
                }
            })
        })
    }
}