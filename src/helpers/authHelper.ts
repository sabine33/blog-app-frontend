import jwtDecode from "jwt-decode";

// Check if token is expired
export const isTokenValid = (token: string) => {
  const decodedToken: any = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  //if token expiry time is greater than current time it is valid.
  return decodedToken.exp > currentTime;
};

export const isAuthValid = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (!token || !user || !isTokenValid(token)) return false;
  else return true;
};
