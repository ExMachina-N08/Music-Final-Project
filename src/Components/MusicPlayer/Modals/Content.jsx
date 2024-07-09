import React from "react";
import { useLocation, Route, Routes, Outlet } from "react-router-dom";
import Home from "../Modals/SubModals/Home";
import Song from "../Modals/SubModals/Song";
import Genre from "./SubModals/Genre";
import Playlist from "./SubModals/Playlist";
import New from "./SubModals/New";
import AlbumItem from "./SubModals/AlbumItem";

const Contents = () => {
  // const location = useLocation();
  // console.log("location first", location);

  // // Define an object that maps paths to components
  // const routes = {
  //   "/app/home": <Home />,

  //   "/app/song": <Song />,
  //   "/app/genre": <Genre />,
  //   "/app/playlist": <Playlist />,
  //   "/app/new": <New />,
  // };

  // // Render the component based on the current path
  // const Component = routes[location.pathname] || <Home />; // Default to <Home /> if no path matches

  // return <>{Component}</>;
  return (
    <Routes>
      <Route path="home" element={<Home />}>
        <Route path="album/:id" element={<AlbumItem />} />
      </Route>

      <Route path="song" element={<Song />} />
      <Route path="genre" element={<Genre />} />
      <Route path="playlist" element={<Playlist />} />
      <Route path="new" element={<New />} />
    </Routes>
  );
};

export default Contents;
