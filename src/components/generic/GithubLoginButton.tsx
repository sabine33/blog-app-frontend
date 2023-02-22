import React, { FormEvent } from "react";

function GithubLoginButton() {
  const apiURL = `${import.meta.env.VITE_API_URL}/auth/github`;

  return (
    <a className="btn btn-outline-success my-2 my-sm-0" href={apiURL}>
      Login with github
    </a>
  );
}

export default GithubLoginButton;
