import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import {
  UserOutlined,
  HistoryOutlined,
  HomeOutlined,
  TikTokFilled,
  BarsOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { PlayerContext } from "../../Context/PlayerContext";

const SideBar = () => {
  const {
    isActive,
    toggleActiveState,
    openProfileModal,
    username,
    profileImage,
  } = useContext(PlayerContext);

  // Default or fetched image
  const avatarUrl =
    profileImage ||
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";

  const links = [
    { path: "/new", icon: <HistoryOutlined />, label: "Recent" },
    { path: "/home", icon: <HomeOutlined />, label: "Home" },
    { path: "/song", icon: <TikTokFilled />, label: "Song" },
    { path: "/genre", icon: <FolderOutlined />, label: "Genre" },
    { path: "/playlist", icon: <BarsOutlined />, label: "Playlist" },
  ];

  return (
    <div className="flex flex-col p-0 sm:p-4 text-white w-full h-full">
      <div
        onClick={openProfileModal}
        className="flex flex-row justify-center p-3 items-center cursor-pointer"
      >
        <Avatar
          src={avatarUrl}
          className="bg-gray-700"
          icon={!profileImage && <UserOutlined />}
          size="large"
        />
        <div className="ml-4 text-xl hidden lg:block">{username}</div>
      </div>
      <ul className="flex flex-grow flex-col w-full max-h-full py-5 pl-1 xl:pl-5 items-center justify-center">
        {links.map((link, index) => (
          <li key={index} className="mb-4 text-lg p-2">
            <NavLink
              to={link.path}
              className={`flex items-center justify-start hover:text-green-500 xl:justify-start ${
                isActive(link.path) ? "text-green-500" : ""
              }`}
              onClick={() => toggleActiveState(link.path)}
            >
              <span className="text-xl md:text-2xl">{link.icon}</span>
              <span className="ml-2 hidden lg:inline">{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
