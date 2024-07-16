import React, { useContext, useEffect, useRef } from "react";
import {
  useLocation,
  Route,
  Routes,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Home from "../Modals/SubModals/Home";
import Song from "../Modals/SubModals/Song";
import Genre from "./SubModals/Genre";
import Playlist from "./SubModals/Playlist";
import New from "./SubModals/New";
import AlbumItem from "./SubModals/AlbumItem";
import { albumsData } from "../../../assets/assets";
import { PlayerContext } from "../../Context/PlayerContext";

const Contents = () => {
  const { filteredSongs, searchQuery, playWithId } = useContext(PlayerContext);
  const navigate = useNavigate();
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
  }, [bgColor, isAlbum]);
  // Function to handle click on search result
  const handleResultClick = (songId) => {
    // Navigate to a detailed view, or play the song, etc.
    // Example: navigate to /songs/songId
    console.log("navigate", navigate(`/song/${songId}`));
  };
  return (
    <div ref={displayRef} className="w-[100%] m-1 px-4 pt-4 rounded ">
      {searchQuery && filteredSongs.length > 0 ? (
        filteredSongs.map((song) => (
          <div
            key={song.id}
            className="p-2 m-2 bg-gray-800 rounded-lg"
            onClick={() => playWithId(song.id)}
          >
            <h3>{song.name}</h3>
            <p>{song.desc}</p>
          </div>
        ))
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Contents;
