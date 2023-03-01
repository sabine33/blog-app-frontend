import jwtDecode from "jwt-decode";

// Check if token is expired
export const isTokenExpired = (token: string) => {
  const decodedToken: any = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  console.log(decodedToken);
  return decodedToken.exp < currentTime;
};

// Middleware to check if token is expired before making any API requests
const authMiddleware = (store: any) => (next: any) => (action: any) => {
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    window.location.href = "/auth/github";
  } else {
    return next(action);
  }
};

export default authMiddleware;
