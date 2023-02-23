import axios from "axios";
export const storeToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || "{}");
};

export const getGithubUserProfile = async (code: string) => {
  const { data } = await axios({
    url: "http://127.0.0.1:4000/auth/profile",
    method: "get",
    params: {
      code,
    },
  });
  console.log(data); // { id, email, name, login, avatar_url }
  return data;
};
