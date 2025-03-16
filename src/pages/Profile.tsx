import React from "react";
import Navbar from "../components/Navbar";
import "./Profile.css"; 

const Profile: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="profileContent">
        <h2>Profile</h2>
        <p>Profile details go here.</p>
      </div>
    </div>
  );
};

export default Profile;
