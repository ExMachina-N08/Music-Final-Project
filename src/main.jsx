import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Nomatch from "./Components/Nomatch.jsx";
import Home from "./Components/MusicPlayer/Modals/SubModals/Home.jsx";
import Song from "./Components/MusicPlayer/Modals/SubModals/Song.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/app" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="song" element={<Song />} />
      </Route>
      <Route path="" element={<Login />} />
      <Route path="*" element={<Nomatch />} />
    </Routes>
  </BrowserRouter>
);
