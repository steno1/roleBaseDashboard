import React from "react";
import Navbar from "../components/Navbar";
import "./Setting.css"; 

const Settings: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="settingsContent">
        <h2>Settings</h2>
        <p>Admin settings configurations.</p>
      </div>
    </div>
  );
};

export default Settings
