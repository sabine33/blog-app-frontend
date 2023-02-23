import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../../store/slices/authSlice";

function GithubLoginCallbackPage() {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const { error, code } = queryString.parse(window.location.search);
    if (error && !code) {
      console.error(error);
      return navigate("/");
    }
    dispatch(getUserProfile({ code, navigate }));
  }, [dispatch]);

  return (
    <div className="container my-5">
      <div className="col-6 mx-auto">
        <div className="login-success card shadow d-flex gap-3">
          <div className="title py-2">User Profile</div>
          <div className="lead">{JSON.stringify(user)}</div>
        </div>
      </div>
    </div>
  );
}

export default GithubLoginCallbackPage;
