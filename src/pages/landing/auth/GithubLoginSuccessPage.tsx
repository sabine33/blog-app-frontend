import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { getGithubUserProfile } from "../../../helpers";
function GithubLoginSuccessPage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const { error, code } = queryString.parse(window.location.search);
    if (error) {
      console.error(error);
      return;
    }
    if (code) {
      console.log({ code });

      getGithubUserProfile(code.toString())
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => {
          console.log("Error occured while fetching user info.");
        });
    }
  }, [user]);

  return (
    <div className="container my-5">
      <div className="col-6 mx-auto">
        <div className="login-success card shadow d-flex gap-3">
          <div className="title py-2">Login successful.</div>
          <div className="lead">{JSON.stringify(user)}</div>
        </div>
      </div>
    </div>
  );
}

export default GithubLoginSuccessPage;
