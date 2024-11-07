import React, { useContext } from "react";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  return currentUser ? children : <Navigate to='/login' replace />;
};

export default ProtectedRoute;