import React from "react";
import { motion } from "framer-motion";
import { assets, songsData } from "../../../assets/assets";
import "./playBar.css";
const Playbar = () => {
  return (
    <>
      <div className="play text-white px-3S">
        <div className="album hidden lg:flex items-center gap-4 ">
          <img className="w-12" src={songsData[0].image} alt="" />
          <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].description}</p>
          </div>
        </div>
        <div
          className="playSet flex flex-col items-center gap-1 m-auto"
          style={{ paddingLeft: 40 }}
        >
          <div className="flex gap-4">
            <img
              className="w-4 cursor-pointer"
              src={assets.shuffle_icon}
              alt=""
            />
            <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
            <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
          </div>
          <div className="volume flex items-center gap-5">
            <p>1:06</p>
            <div className="w-[60vw] max-w[500px] bg-gray-300 rounded-full cursor-pointer">
              <hr className="h-1 border-none w-80 bg-green-800 rounded-full" />
            </div>
            <p>3:20</p>
          </div>
        </div>
        <div className="volume hidden lg:flex items-center gap-2 opacity-75">
          <img className="w-4" src={assets.plays_icon} />
          <img className="w-4" src={assets.mic_icon} />
          <img className="w-4" src={assets.queue_icon} />
          <img className="w-4" src={assets.speaker_icon} />
          <img className="w-4" src={assets.volume_icon} />
          <div className="w-20 bg-slate-50 h-1 rounded"></div>
          <img className="w-4" src={assets.zoom_icon} />
        </div>
      </div>
    </>
    // <motion.div
    //   layout
    //   data-isOpen={isOpen}
    //   initial={{ borderRadius: 30 }}
    //   className="parent"
    //   onClick={() => setIsOpen(!isOpen)}
    // >
    //   <motion.div layout className="child" />
    // </motion.div>
  );
};

export default Playbar;
