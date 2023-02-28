import React from "react";
import { useSelector } from "react-redux";
import "../../styles/ProfileCard.scss";
import { UserType } from "../../types";

function ProfilePage() {
  const { user }: { user: UserType } = useSelector((state: any) => state.auth);
  return (
    <main className="admin__main">
      <h2 className="">Profile</h2>
      <div className="dashboard">
        <div className="profile mt-3">
          <div className="card">
            <img
              src={user.avatar_url}
              className="profile-image img-responsive"
            />
            <h1>{user.name}</h1>
            <p className="title">{user.bio}</p>
            <p>{user.company}</p>

            <a href={user.url}>
              <i className="fa fa-github"></i>
            </a>

            <p>
              <button>Contact</button>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
