import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../assets/assets";
import { extractColors } from "extract-colors";
export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[0]);

  //reveal or hide component
  const [playStatus, setPlayStatus] = useState(false);

  // State to manage modal visibility
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  // Function to open and close the profile modal
  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  //  dynamic background gradient
  const [backgroundGradient, setBackgroundGradient] = useState("");

  // Fetch and set the background gradient based on the dominant colors of the track image
  useEffect(() => {
    if (track.image) {
      extractColors(track.image).then((colors) => {
        if (colors.length > 1) {
          const gradient = `linear-gradient(to top, ${colors[0].hex}, ${colors[1].hex})`;
          setBackgroundGradient(gradient);
        }
      });
    }
  }, [track]);

  // logic for display duration
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  // create play function
  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  // create pause function
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };
  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
    console.log(e);
  };
  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const [activePath, setActivePath] = useState("");

  const toggleActiveState = (path) => {
    setActivePath(path); // Set the active path
  };

  const isActive = (path) => {
    return path === activePath; // Check if the provided path is the active path
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songsData);

  // Update filtered results when searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = songsData.filter(
        (song) =>
          song.name.toLowerCase().includes(lowercasedQuery) ||
          song.desc.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs(songsData); // reset if search query is cleared
    }
  }, [searchQuery]);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || ""
  );
  const updateProfile = (name, image) => {
    localStorage.setItem("username", name);
    localStorage.setItem("profileImage", image);
    setUsername(name);
    setProfileImage(image);
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    songs: songsData,
    backgroundGradient,
    isActive,
    toggleActiveState,
    searchQuery,
    setSearchQuery,
    filteredSongs,
    openProfileModal,
    closeProfileModal,
    isProfileModalOpen,
    username,
    setUsername,
    profileImage,
    setProfileImage,
    updateProfile,
  };
  // given any component access to properties inside PlayerContext function
  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
export default PlayerContextProvider;
