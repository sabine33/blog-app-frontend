import axios, { AxiosResponse, AxiosError } from "axios";

import { APIResponseType, ArticleType } from "../types";
const baseURL: string = import.meta.env.VITE_API_URL;

/** Create axios api client */
const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
  },
});
/** Response body */
const responseBody = (response: AxiosResponse): APIResponseType => {
  return response.data;
};
/** Error body */
const errorBody = (response: AxiosError) => {
  let errorMessage = "Unknown error occured.";
  if (response && response.response && response.response.data) {
    errorMessage = (response.response as AxiosResponse).data["message"];
  }
  throw new Error(errorMessage);
};

/** Create generic request handler */
export const axiosRequest = {
  get: (url: string) => apiClient.get(url).then(responseBody).catch(errorBody),
  post: (url: string, body: {}, headers?: {}) =>
    apiClient.post(url, body).then(responseBody).catch(errorBody),
  put: (url: string, body: any) => apiClient.put(url, body).then(responseBody),
  delete: (url: string) =>
    apiClient.delete(url).then(responseBody).catch(errorBody),
};
