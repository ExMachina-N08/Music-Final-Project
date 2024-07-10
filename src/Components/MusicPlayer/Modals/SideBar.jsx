import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined, HistoryOutlined, HomeOutlined } from "@ant-design/icons";

const SideBar = () => {
  return (
    <div className="flex flex-col p-4 text-white w-full h-full ">
      {" "}
      {/* Sidebar container with padding and background */}
      <div className=" flex flex-row justify-center p-3 items-center ">
        {" "}
        {/* Margin bottom for spacing */}
        <Avatar
          className="bg-gray-700 w-6 h-6 sm:w-8 sm:h-8 md:w-16 md:h-16"
          icon={<UserOutlined />}
          size="large"
        />{" "}
        {/* Tailwind doesn't directly support 'size' prop */}
        <div className="ml-4 text-base sm:text-lg md:text-lg xl:text-2xl hidden lg:block ">
          User Name
        </div>{" "}
        {/* Margin left and text size */}
      </div>
      <div className="flex flex-grow flex-col justify-center items-center ">
        <ul className=" w-full max-h-full py-5 pl-1 xl:pl-5 items-center justify-center">
          <li className="flex items-center justify-center xl:justify-start  mb-4 text-base sm:text-lg md:text-xl p-2 hover:text-gray-300">
            <NavLink
              to="/new"
              className="flex items-center  hover:text-green-500 "
            >
              <HistoryOutlined className="text-lg sm:text-xl md:text-2xl" />
              <span className="ml-2 hidden lg:inline">Recently Added</span>
            </NavLink>
          </li>
          <li className="flex items-center justify-center xl:justify-start  mb-4 text-base sm:text-lg md:text-xl p-2 hover:text-gray-300">
            <NavLink
              to="/home"
              className="flex items-center hover:text-green-500"
            >
              <HomeOutlined className="text-lg sm:text-xl md:text-2xl" />
              <span className="ml-2 hidden lg:inline">Home</span>
            </NavLink>
          </li>
          <li className="flex items-center justify-center xl:justify-start mb-4 text-base sm:text-lg md:text-xl p-2 hover:text-gray-30">
            <NavLink
              to="/song"
              className="flex items-center hover:text-green-500 "
            >
              <img
                alt="Songs"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8"
                src="/src/assets/musicnote.png"
              />
              <span className="ml-1 hidden lg:inline">Songs</span>
            </NavLink>
          </li>
          <li className="flex items-center justify-center xl:justify-start mb-4 text-base sm:text-lg md:text-xl p-2 hover:text-gray-300">
            <NavLink
              to="/genre"
              className="flex items-center hover:text-green-500"
            >
              <img
                alt="Genre"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8"
                src="/src/assets/genre.png"
              />
              <span className="ml-1 hidden lg:inline">Genre</span>
            </NavLink>
          </li>
          <li className="flex items-center justify-center xl:justify-start mb-4 text-base sm:text-lg md:text-xl p-2 hover:text-gray-300">
            <NavLink
              to="/playlist"
              className="flex items-center hover:text-green-500"
            >
              <img
                alt="Playlist"
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8"
                src="/src/assets/playlist.png"
              />
              <span className="ml-1 hidden lg:inline">Playlist</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
