import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { state } = useLocation();
  const navi = useNavigate();
  console.log(state);

  useEffect(() => {
    const data = localStorage.getItem("Authenticate");
    if (!data) {
      navi("/admin");
    }
  }, []);

  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-2">
        <h1>{state.data?.email}</h1>
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>

          {/* <Link to="/dashboard/inventory">
            <li>Inventory</li>
          </Link> */}

          <Link to="/dashboard/blog">
            <li>Blog</li>
          </Link>

          <Link to="/dashboard/user">
            <li>user</li>
          </Link>
        </ul>
      </div>
      <div className="col-span-7">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
