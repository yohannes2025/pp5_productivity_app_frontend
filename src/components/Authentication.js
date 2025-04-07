// src/components/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authToken) {
      axios
        .get("/auth/user/", {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => logout());
    }
  }, [authToken]);

  const login = (token) => {
    localStorage.setItem("token", token);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
