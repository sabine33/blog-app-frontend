import axios, { AxiosResponse, AxiosError } from "axios";

import { APIResponseType, ArticleType } from "../types";
const baseURL: string = import.meta.env.VITE_API_URL;

export const setAuthToken = (token: string) => {
  if (token) {
    localStorage.setItem("token", JSON.stringify(token));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  }
};

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
  },
});

const responseBody = (response: AxiosResponse): APIResponseType => {
  return response.data;
};

const errorBody = (response: AxiosError) => {
  let errorMessage = "Unknown error occured.";

  if (response && response.response && response.response.data) {
    errorMessage = (response.response as AxiosResponse).data["message"];
  }
  throw new Error(errorMessage);
};

const axiosRequest = {
  get: (url: string) => apiClient.get(url).then(responseBody).catch(errorBody),
  post: (url: string, body: {}, headers?: {}) =>
    apiClient.post(url, body).then(responseBody).catch(errorBody),
  put: (url: string, body: any) => apiClient.put(url, body).then(responseBody),
  delete: (url: string) =>
    apiClient.delete(url).then(responseBody).catch(errorBody),
};

export const Article = {
  getArticles: (): Promise<APIResponseType> => axiosRequest.get("/articles"),
  getByAuthor: (id: number): Promise<APIResponseType> =>
    axiosRequest.get(`/articles/author/${id}`),

  getArticle: (id: string): Promise<APIResponseType> =>
    axiosRequest.get(`articles/${id}`),
  createArticle: (data: Partial<ArticleType>): Promise<any> =>
    axiosRequest.post("articles", data),
  updateArticle: (
    id: string,
    data: Partial<ArticleType>
  ): Promise<APIResponseType> => axiosRequest.put(`articles/${id}`, data),
  deleteArticle: (id: string): Promise<APIResponseType> =>
    axiosRequest.delete(`articles/${id}`),
};

export const Auth = {
  doLoginWithGithubCode: (code: string): Promise<APIResponseType> =>
    axiosRequest.get("auth/github/success?code=" + code),
  fetchGithubProfile: (code: string): Promise<APIResponseType> =>
    axiosRequest.get("auth/profile?code=" + code),
};
