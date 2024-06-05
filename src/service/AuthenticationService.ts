import { useContext } from "react";
import { useMutationReq, useQueryReq } from "../Hooks";
import { JWTPayload, User } from "../models";
import AuthenticationAPI from "./api/Authentication";
import { UserContext } from "../context";
import { UserDAO } from "../DAO";

import jwt_decode from "jwt-decode";
import { AxiosError } from "axios";

class AuthenticationService {
  public static useLogin() {
    const { setUser } = useContext(UserContext);
    const { mutate, ...rest } = useMutationReq({
      request: AuthenticationAPI.login,
      onSuccess: async ({ data }) => {
        const { access_token, refresh_token } = data;
        const logedinUser = new User(
          jwt_decode(access_token) as JWTPayload,
          access_token,
          refresh_token
        );
        setUser(logedinUser);
        await UserDAO.save(logedinUser);
      },
      onError: (err) => console.log("onError", err),
    });

    const onLogin = async (data: any) => {
      mutate({
        username: data.email as string,
        password: data.password as string,
      });
    };

    return { onLogin, ...rest };
  }
  public static useRegister() {
    const { mutate, ...rest } = useMutationReq({
      request: AuthenticationAPI.register,
      onError: (err: AxiosError) => console.log("onError", err.cause),
    });

    async function onRegister(data: any) {
      mutate({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });
    }

    return { onRegister, ...rest };
  }

  public static logout() {
    const { user, setUser } = useContext(UserContext);
    return useMutationReq({
      request: () => AuthenticationAPI.logout((user as User).token),
      onSuccess: ({ data }) => {
        UserDAO.delete();
        setUser(null);
      },
      onError: (err) => console.log("onError", err),
    });
  }

  public static useFetchUser(token: string) {
    return useQueryReq({
      request: () => AuthenticationAPI.fetchUser(token),
      // onSuccess: ({ data }) => console.log("onSuccess", data),
      onError: (err) => console.log("onError", err),
    });
  }
}

export default AuthenticationService;
