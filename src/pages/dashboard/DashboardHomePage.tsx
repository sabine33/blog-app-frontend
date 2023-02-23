import React from "react";
import { useSelector } from "react-redux";
import { UserType } from "../../types";

function DashboardHomePage() {
  const { user, isLoggedIn }: { user: UserType; isLoggedIn: boolean } =
    useSelector((state: any) => state.auth);

  return (
    <div className="card shadow-sm">
      <div className="title h3">Welcome</div>
      <div>{user.name}</div>
    </div>
  );
}

export default DashboardHomePage;
