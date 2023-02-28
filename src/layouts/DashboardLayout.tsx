import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/dashboard/HeaderComponent";
import SidebarComponent from "../components/dashboard/SidebarComponent";
import "../styles/Dashboard.scss";

function DashboardLayout() {
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
