import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const [user, setUser] = useState("");
  const { login } = useAuth();
  const location = useLocation();
  const redirectedPath = location.state?.path || "/";
  const navigate = useNavigate();

  const handleLogin = () => {
    login(user);
    navigate(redirectedPath, { replace: true });
  };

  return (
    <div>
      <label htmlFor="">
        Username
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
