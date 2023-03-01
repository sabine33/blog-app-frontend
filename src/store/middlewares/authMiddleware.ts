import { isAuthValid } from "../../helpers/authHelper";

// Middleware to check if token is expired before making any API requests
export const authMiddleware = (store: any) => (next: any) => (action: any) => {
  if (!isAuthValid() && window.location.href.includes("/dashboard/")) {
    window.location.href = "/";
  } else {
    return next(action);
  }
};

export default authMiddleware;
