import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import {
  UserOutlined,
  HistoryOutlined,
  HomeOutlined,
  TikTokFilled,
  BarsOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { PlayerContext } from "../../Context/PlayerContext";

const SideBar = () => {
  const { isActive, toggleActiveState } = useContext(PlayerContext);
  const links = [
    { path: "/new", icon: <HistoryOutlined />, label: "Recent" },
    { path: "/home", icon: <HomeOutlined />, label: "Home" },
    { path: "/song", icon: <TikTokFilled />, label: "Song" },
    { path: "/genre", icon: <ProductOutlined />, label: "Genre" },
    { path: "/playlist", icon: <BarsOutlined />, label: "Playlist" },
  ];

  return (
    <div className="flex flex-col p-4 text-white w-full h-full">
      <div className="flex flex-row justify-center p-3 items-center">
        <Avatar className="bg-gray-700" icon={<UserOutlined />} size="large" />
        <div className="ml-4 text-lg hidden lg:block">User Name</div>
      </div>
      <ul className="flex flex-grow flex-col justify-center items-center w-full max-h-full py-5 pl-1 xl:pl-5 items-center justify-center">
        {links.map((link, index) => (
          <li key={index} className="mb-4 text-lg p-2">
            <NavLink
              to={link.path}
              className={`flex items-center justify-start  hover:text-green-500 xl:justify-start ${
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
