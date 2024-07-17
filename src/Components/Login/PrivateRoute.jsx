// PrivateRoute.jsx
import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PlayerContext } from "../Context/PlayerContext";
import MusicPlayer from "../MusicPlayer/Player/MusicPlayer";

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(PlayerContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
