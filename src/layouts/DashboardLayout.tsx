import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/dashboard/HeaderComponent";
import SidebarComponent from "../components/dashboard/SidebarComponent";
import { isAuthValid, isTokenValid } from "../helpers/authHelper";
import "../styles/Dashboard.scss";

function DashboardLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthValid()) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div className="admin">
        <Toaster position="top-center" />
        <HeaderComponent />
        <SidebarComponent />
        <Outlet />
        <footer className="admin__footer">
          <ul className="ticker">
            <li className="ticker__item">&copy;2023</li>
          </ul>
          <span>All rights reserved.</span>
        </footer>
      </div>
    </div>
  );
}

export default DashboardLayout;
