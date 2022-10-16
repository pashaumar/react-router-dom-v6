import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      Welcome {user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
