import { AxiosRequestConfig, AxiosResponse } from "axios";
import { api, authApi } from "./axiosConfig";

interface ApiResponse {
  data?: any;
  status?: number;
  headers?: any;
}

interface ApiError {
  status?: number;
  data?: any;
}

const apiRequestHandler = async (
  options: AxiosRequestConfig
): Promise<AxiosResponse> => {
  return api.request(options);
};

export const authApiRequestHandler = async (
  options: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const res = await authApi.request(options);
  const {
    data: { data },
  } = res;
  console.log("🚀 ~ file: apiRequestHandler.ts:20 ~ data:", data);
  return res;
};

export default apiRequestHandler;
