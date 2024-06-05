import axios, { AxiosError, AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://192.168.1.12:8080/api/v1",
  //timeout: 1000 * 20,
});
export const authApi: AxiosInstance = axios.create({
  baseURL: "http://192.168.1.14:8080",
  //timeout: 1000 * 20,
});
