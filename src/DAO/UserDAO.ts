import storage from "@react-native-async-storage/async-storage";
import { User } from "../models";

export class UserDAO {
  static key = "user";

  public static async save(user: User) {
    await storage.setItem("user", JSON.stringify(user));
  }
  public static async delete() {
    storage.removeItem(UserDAO.key);
  }
  public static async get() {
    let savedUser = await storage.getItem(UserDAO.key);
    if (!savedUser) return null;
    const userObj = JSON.parse(savedUser) as User;
    return userObj;
  }
}
