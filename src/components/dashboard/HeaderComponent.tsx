import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";

function HeaderComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSignout(event: FormEvent) {
    dispatch(logout());
    navigate("/");
  }

  return (
    <header className="admin__header">
      <a href="#" className="logo">
        <h1>Dashboard</h1>
      </a>
      <div className="toolbar">
        <Link
          className="btn btn-outline-primary text-black"
          replace={true}
          reloadDocument={true}
          to={"/dashboard/articles/add"}
        >
          Add New Article
        </Link>
        <button onClick={handleSignout} className="logout btn btn-danger">
          Log Out
        </button>
      </div>
    </header>
  );
}

export default HeaderComponent;
