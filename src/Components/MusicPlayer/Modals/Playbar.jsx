import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { assets, songsData } from "../../../assets/assets";
import "./playBar.css";
import { PlayerContext } from "../../Context/PlayerContext";
const Playbar = ({ onAlbumClick }) => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  // State to toggle the class
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle click on the image
  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
    if (onAlbumClick) {
      onAlbumClick();
    }
  };
  return (
    <>
      <div
        className={
          isExpanded ? "flex flex-col h-[100%]" : "play text-white px-3S"
        }
      >
        <div
          className={
            isExpanded
              ? "album items-center justify-center flex flex-col flex-grow  "
              : "album lg:flex items-center gap-4"
          }
        >
          <div className="rounded">
            <img
              onClick={handleImageClick}
              className={
                isExpanded ? " p-6 w-[600px] rounded" : " w-12 rounded  "
              }
              src={track.image}
              alt=""
            />
          </div>
          <div
            className={
              isExpanded
                ? "lg:flex flex-col items-start gap-1 mx-48 px-56 w-[80%]"
                : "hidden lg:flex flex-col items-start gap-1"
            }
          >
            <p className={isExpanded ? "text-[30px]" : ""}>{track.name}</p>
            <p className={isExpanded ? "text-[20px]" : ""}>
              {" "}
              {track.desc.slice(0, 22)}
            </p>
          </div>
        </div>
        <div
          className={
            isExpanded ? "flex flex-row h-36" : "flex flex-row flex-grow"
          }
        >
          <div
            className={
              isExpanded
                ? "playSet flex flex-col items-center gap-1 mx-auto"
                : "playSet flex flex-col items-center gap-1 m-auto"
            }
          >
            <div
              className={isExpanded ? "flex gap-20 pb-5 mt-8" : "flex gap-4"}
            >
              <img
                className={
                  isExpanded
                    ? "hidden sm:hidden md:block  xl:block w-10 cursor-pointer"
                    : "hidden sm:hidden md:block  xl:block w-4 cursor-pointer"
                }
                src={assets.shuffle_icon}
                alt=""
              />
              <img
                onClick={previous}
                className={
                  isExpanded ? "w-10 cursor-pointer" : "w-4 cursor-pointer"
                }
                src={assets.prev_icon}
                alt=""
              />
              {playStatus ? (
                <img
                  onClick={pause}
                  className={
                    isExpanded ? "w-10 cursor-pointer" : "w-4 cursor-pointer"
                  }
                  src={assets.pause_icon}
                  alt=""
                />
              ) : (
                <img
                  onClick={play}
                  className={
                    isExpanded ? "w-10 cursor-pointer" : "w-4 cursor-pointer"
                  }
                  src={assets.play_icon}
                  alt=""
                />
              )}

              <img
                onClick={next}
                className={
                  isExpanded ? "w-10 cursor-pointer" : "w-4 cursor-pointer"
                }
                src={assets.next_icon}
                alt=""
              />
              <img
                className={
                  isExpanded ? "w-10 cursor-pointer" : "w-4 cursor-pointer"
                }
                src={assets.loop_icon}
                alt=""
              />
            </div>
            <div className=" flex items-center gap-5">
              <p>
                {time.currentTime.minute}:{time.currentTime.second}
              </p>
              <div
                ref={seekBg}
                onClick={seekSong}
                className="w-[60vw] max-w[500px] bg-gray-300 rounded-full cursor-pointer"
              >
                <hr
                  ref={seekBar}
                  className="h-1 border-none w-80 bg-green-800 rounded-full"
                />
              </div>
              <p>
                {time.totalTime.minute}:{time.totalTime.second}
              </p>
            </div>
          </div>
        </div>
        {/* <div
          className={
            isExpanded
              ? " volume hidden h-16 justify-between xl:flex items-center gap-2 lg:m-1 opacity-75"
              : " volume hidden xl:flex items-center gap-2 lg:m-1 opacity-75"
          }
        >
          <img className="w-6" src={assets.queue_icon} />

          <div className="flex flex-row gap-5">
            <img className="w-6" src={assets.volume_icon} />
            <div className="my-auto">
              <div className="w-20 bg-slate-50 h-1 rounded"></div>
            </div>
          </div>
        </div> */}
        {/* <img className="w-6" src={assets.plays_icon} /> */}
      </div>
    </>
  );
};
export default Playbar;
// cái chỗ click dau a
