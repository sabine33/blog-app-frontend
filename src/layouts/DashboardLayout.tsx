import { useState } from "react";
import { Outlet } from "react-router";
import Footer from "../components/dashboard/FooterComponent";
import Header from "../components/dashboard/HeaderComponent";

function DashboardLayout() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Header />
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
