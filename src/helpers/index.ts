import axios from "axios";
import { ArticleType, APIResponseType, UserType } from "../types";
import { Auth } from "./api";
const GITHUB_PROFILE_URL = import.meta.env.VITE_API_URL + "/auth/profile";

const SLICE_LIMIT = 50;
/**
 * Save contents to local storage.
 * @param key
 * @param data
 */
export const storeToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Get items from local storage.
 * @param key
 * @returns object
 * */
export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

/**
 * Get github user profile.
 * @param code
 * @returns Promise<UserType>
 */
export const getGithubUserProfile = async (code: string): Promise<UserType> => {
  const response = await Auth.fetchGithubProfile(code);
  return response.data as UserType;
};

/**
 * Get featured article
 * @param articles
 * @returns Featured articles.
 */
export const getHeadlineArticle = (articles: ArticleType[]) => {
  return articles.find((article: ArticleType) => article.isFeatured == true);
};
/**
 * Format date.
 * @param date
 * @returns
 */
export const formatDate = (date: Date) => {
  return date.toISOString().split("T")[0];
};
/**
 * Slice content based on size limit
 * @param content
 * @param length
 * @returns
 */
export const sliceContent = (
  content: string,
  length = SLICE_LIMIT ?? 100
): string => {
  if (!content) return "";
  return content.slice(0, length) + "...";
};
/**
 * Extract text content from HTML string.
 * @param html
 * @returns
 */
export const extractContent = (html: string) => {
  return new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent;
};

/**
 * Set auth token for authorization header
 * @param token
 */
export const setAuthToken = (token: string) => {
  if (token) {
    localStorage.setItem("token", JSON.stringify(token));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  }
};
