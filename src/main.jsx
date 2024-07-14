import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Nomatch from "./Components/Nomatch.jsx";
import Home from "./Components/MusicPlayer/Modals/SubModals/Home.jsx";
import Song from "./Components/MusicPlayer/Modals/SubModals/Song.jsx";
import Playlist from "./Components/MusicPlayer/Modals/SubModals/Playlist.jsx";
import Genre from "./Components/MusicPlayer/Modals/SubModals/Genre.jsx";
import New from "./Components/MusicPlayer/Modals/SubModals/New.jsx";
import AlbumItem from "./Components/MusicPlayer/Modals/SubModals/AlbumItem.jsx";
import Album from "./Components/MusicPlayer/Modals/SubModals/Album.jsx";
import PlayerContextProvider from "./Components/Context/PlayerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PlayerContextProvider>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<App />}>
          {/*  Sets Home as the default */}
          <Route index element={<Home />} />
          component
          <Route path="home" element={<Home />} />
          {/* <Route path="/album/:id" element={<AlbumItem />} /> */}
          <Route path="/album/:id/" element={<Album />} />
          <Route path="song" element={<Song />} />
          <Route path="genre" element={<Genre />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path="*" element={<Nomatch />} />
      </Routes>
    </PlayerContextProvider>
  </BrowserRouter>
);
