import React from "react";
import { useSelector } from "react-redux";
import { UserType } from "../../types";

function DashboardHomePage() {
  const { user, isLoggedIn }: { user: UserType; isLoggedIn: boolean } =
    useSelector((state: any) => state.auth);

  return (
    <main className="admin__main">
      <h2 className="">Dashboard</h2>
      <div className="dashboard">
        <div className="dashboard__item mt-3">
          <div className="card">
            <strong>41</strong> <h4>Articles</h4>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardHomePage;
