import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import MusicPlayer from "./Components/MusicPlayer/Player/MusicPlayer";
import Home from "./Components/MusicPlayer/Modals/SubModals/Home";
import AlbumItem from "./Components/MusicPlayer/Modals/SubModals/AlbumItem";
import Song from "./Components/MusicPlayer/Modals/SubModals/Song";
import Genre from "./Components/MusicPlayer/Modals/SubModals/Genre";
import Playlist from "./Components/MusicPlayer/Modals/SubModals/Playlist";
import New from "./Components/MusicPlayer/Modals/SubModals/New";

function App() {
  return (
    <MusicPlayer>
      <Routes>
        <Route path="/" element={<Outlet />} /> // This ensures that MusicPlayer
        is always rendered
        <Route path="home" element={<Home />}>
          <Route path="album/:id" element={<AlbumItem />} />
        </Route>
        <Route path="song" element={<Song />} />
        <Route path="genre" element={<Genre />} />
        <Route path="playlist" element={<Playlist />} />
        <Route path="new" element={<New />} />
      </Routes>
    </MusicPlayer>
  );
}

export default App;
