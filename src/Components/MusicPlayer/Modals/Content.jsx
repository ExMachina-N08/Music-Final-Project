import React, { useEffect, useRef } from "react";
import { useLocation, Route, Routes, Outlet } from "react-router-dom";
import Home from "../Modals/SubModals/Home";
import Song from "../Modals/SubModals/Song";
import Genre from "./SubModals/Genre";
import Playlist from "./SubModals/Playlist";
import New from "./SubModals/New";
import AlbumItem from "./SubModals/AlbumItem";
import { albumsData } from "../../../assets/assets";

const Contents = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  // convert albumData (string) => albumId(number)
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212 )`;
    } else {
      displayRef.current.style.background = `#000000`;
    }
  });
  return (
    <div ref={displayRef} className="w-[100%] m-1 px-4 pt-4 rounded">
      {<Outlet />}
    </div>
  );
};

export default Contents;
