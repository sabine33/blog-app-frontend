import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { getGithubUserProfile } from "../../helpers";
function GithubLoginSuccess() {
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
        .then((resp) => {
          alert(JSON.stringify(resp));
          setUser(user);
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

export default GithubLoginSuccess;
