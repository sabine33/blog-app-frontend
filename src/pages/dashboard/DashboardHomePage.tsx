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
        <div className="mt-3">
          <div className="card card-sm text-center" style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src={user.avatar_url}
              alt="Profile image"
            />
            <div className="card-body">
              <h4 className="card-title">{user.name}</h4>
              <p className="card-text">{user.bio}</p>
              <a href={user.html_url} className="btn btn-danger">
                See Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardHomePage;
