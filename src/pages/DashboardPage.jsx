import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../components/dashboard/DashboardMenu";
import HeaderToolbar from "../components/HeaderToolbar";

const DashboardPage = () => {
  return (
    <div>
      <HeaderToolbar title="Dokumen" />
      <div className="flex flex-row">
        <DashboardMenu />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
