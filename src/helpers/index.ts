import axios from "axios";
import { ArticleType, APIResponseType, UserType } from "../types";
import { Auth } from "./apiHelper";
const GITHUB_PROFILE_URL = import.meta.env.VITE_API_URL + "/auth/profile";

const SLICE_LIMIT = 50;

export const storeToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

export const getGithubUserProfile = async (code: string): Promise<UserType> => {
  const response = await Auth.fetchGithubProfile(code);
  return response.data as UserType;
};

export const getHeadlineArticle = (articles: ArticleType[]) => {
  return articles.find((article: ArticleType) => article.isFeatured == true);
};

export const paginateArticle = (
  articles: ArticleType[],
  pageCounter: number
) => {};

export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};

export const sliceContent = (content: string, length = SLICE_LIMIT): string => {
  if (!content) return "";
  return content.slice(0, length) + "...";
};

export const extractContent = (html: string) => {
  return new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent;
};
