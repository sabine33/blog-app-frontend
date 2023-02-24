import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { ArticleType } from "../types";
const baseURL: string = import.meta.env.VITE_API_URL;
const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const responseBody = (response: AxiosResponse): APIResponseType => {
  return response.data;
};

const errorBody = (response: AxiosError) => {
  console.log(response);
  let errorMessage = "Unknown error occured.";
  if (response && response.response && response.response.data) {
    errorMessage = (response.response as AxiosResponse).data["message"];
  }
  throw new Error(errorMessage);
};

const axiosRequest = {
  get: (url: string) => apiClient.get(url).then(responseBody).catch(errorBody),
  post: (url: string, body: {}, headers?: {}) =>
    apiClient.post(url, body, { headers }).then(responseBody).catch(errorBody),
  put: (url: string, body: any) => apiClient.put(url, body).then(responseBody),
  delete: (url: string) =>
    apiClient.delete(url).then(responseBody).catch(errorBody),
};

export const Article = {
  getArticles: (): Promise<APIResponseType> => axiosRequest.get("/articles"),

  getArticle: (id: number): Promise<APIResponseType> =>
    axiosRequest.get(`articles/${id}`),
  createArticle: (data: Partial<ArticleType>): Promise<any> =>
    axiosRequest.post("articles", data),
  updateArticle: (
    id: number,
    data: Partial<ArticleType>
  ): Promise<APIResponseType> => axiosRequest.put(`articles/${id}`, data),
  deleteArticle: (id: number): Promise<APIResponseType> =>
    axiosRequest.delete(`articles/${id}`),
};

export const Auth = {
  fetchGithubProfile: (code: string): Promise<APIResponseType> =>
    axiosRequest.get("auth/profile?code=" + code),
};
