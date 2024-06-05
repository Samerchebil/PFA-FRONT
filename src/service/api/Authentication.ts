import { RequestHandler, authApiRequestHandler } from "../../config";

interface LoginDTO {
  username: string;
  password: string;
  deviceName: string;
}
interface RegisterDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class AuthenticationAPI {
  public static async login({ username, password }: LoginDTO) {
    console.log(
      "🚀 ~ file: Authentication.ts:11 ~ AuthenticationAPI ~ login ~ login"
    );
    const form = new URLSearchParams();
    form.append("username", username);
    form.append("password", password);
    form.append("grant_type", "password");
    form.append("client_id", "myclient");

    return authApiRequestHandler({
      url: "/realms/myrealm/protocol/openid-connect/token",
      method: "POST",
      data: form.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }
  public static async fetchUser(token: string) {
    console.log(
      "🚀 ~ file: Authentication.ts:23 ~ AuthenticationAPI ~ fetchUser ~ fetchUser"
    );
    return RequestHandler({
      url: "/user",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  public static async logout(token: string) {
    console.log(
      "🚀 ~ file: Authentication.ts:33 ~ AuthenticationAPI ~ logout ~ logout"
    );
    return RequestHandler({
      url: "/logout",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  public static async register(registerDTO: RegisterDTO) {
    console.log(
      "🚀 ~ file: Authentication.ts:33 ~ AuthenticationAPI ~ logout ~ logout"
    );
    return RequestHandler({
      url: "/register",
      method: "POST",
      data: registerDTO,
    });
  }
}

export default AuthenticationAPI;
