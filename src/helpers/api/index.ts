import { APIResponseType, ArticleType } from "../../types";
import { axiosRequest } from "../apiHelper";
import { isTokenExpired } from "../authHelper";

const isAuthValid = () => {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    window.location.href = "/auth/github";
  } else {
    return Promise.resolve(true);
  }
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
