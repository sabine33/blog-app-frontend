import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Auth, setAuthToken } from "../../../helpers/apiHelper";
import { loginStart } from "../../../store/slices/authSlice";

function GithubLoginCallbackPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isLoggedIn, error } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    const { error, code } = queryString.parse(window.location.search);
    if (error && !code) {
      return navigate("/");
    }
    dispatch(loginStart({ code, navigate }));
  }, []);

  return (
    <div className="container my-5">
      <div className="col-6 mx-auto">
        <div className="login-success card shadow d-flex gap-3 text-center">
          <div className="title py-2">User Profile</div>
          {loading && <p>Loading...</p>}
          {error && <p className="p text-danger">{error}</p>}
          {isLoggedIn && <p>Login successful!</p>}
        </div>
      </div>
    </div>
  );
}

export default GithubLoginCallbackPage;
