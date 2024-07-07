import { useState } from "react";
import MusicPlayer from "./Components/MusicPlayer/Player/MusicPlayer";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <MusicPlayer />
      {/* <Outlet /> */}
    </>
  );
}

export default App;
