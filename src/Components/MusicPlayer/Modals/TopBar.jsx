import React from "react";
import { SpotifyFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Space } from "antd";

import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-3 py-1 rounded-2xl hidden md:block cursor-pointer">
            Search
          </p>
        </div>
      </div>
    </>
  );
};
export default TopBar;
