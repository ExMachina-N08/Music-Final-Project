import React, { useContext } from "react";
import { SearchOutlined, SpotifyFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Space } from "antd";
import { useState } from "react";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../../Context/PlayerContext";
const TopBar = () => {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false); // State to manage input visibility
  const { setSearchQuery, filteredSongs } = useContext(PlayerContext); // Correctly place useContext at the component top level

  const toggleSearch = () => {
    setSearchVisible(!searchVisible); // Toggle visibility
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Update the search query in context
    console.log("search", event.target.value);
  };
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
        <div className=" bg-black flex flex-row items-center gap-4 rounded-2xl">
          {searchVisible && (
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
              className={
                searchVisible
                  ? "  bg-transparent rounded px-4 py-1 outline-none"
                  : " bg-transparent rounded px-4 py-1 outline-none"
              }
            />
          )}
          <p
            onClick={toggleSearch}
            className=" text-white text-[15px] px-3 py-1   md:block cursor-pointer"
          >
            <SearchOutlined />
          </p>
        </div>
      </div>
    </>
  );
};
export default TopBar;
