import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "../components/dashboard/FooterComponent";
import Header from "../components/dashboard/HeaderComponent";
import { useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { Navigate } from "react-router";

function DashboardLayout() {
  const { user, isLoggedIn } = useSelector((state: any) => state.auth);
  const { message } = useSelector((state: any) => state.message);

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Header />
      {isLoggedIn}
      {message && (
        <div className="message">
          <div className="alert alert-primary" role="alert">
            <strong>{message}</strong>
          </div>
        </div>
      )}
      <div className="container dashboard__body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
