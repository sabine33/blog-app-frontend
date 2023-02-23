import axios from "axios";
import { TabContent } from "react-bootstrap";
import { ArticleType } from "../types";
const GITHUB_PROFILE_URL = import.meta.env.VITE_API_URL + "/auth/profile";

export const storeToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

export const getGithubUserProfile = async (code: string) => {
  const { data } = await axios({
    url: GITHUB_PROFILE_URL,
    method: "get",
    params: {
      code,
    },
  });
  return data;
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

export const sliceContent = (content: string): string => {
  return content.length > 100 ? content.slice(0, 100) + "..." : content;
};
