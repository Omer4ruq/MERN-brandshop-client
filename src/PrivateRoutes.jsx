import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner text-warning"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

export default PrivateRoutes;
