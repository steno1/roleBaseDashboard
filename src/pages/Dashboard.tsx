import React from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="dashboardContainer">
      <Navbar />
      <div className="dashboardContent">
        <h2>Dashboard</h2>
        {user?.role === "Admin" && <p>Admin Controls: Manage users and settings.</p>}
        {user?.role === "Editor" && <p>Editor Panel: Edit and manage content.</p>}
        {user?.role === "Viewer" && <p>Viewer Reports: View-only access.</p>}
      </div>
    </div>
  );
};

export default Dashboard;
