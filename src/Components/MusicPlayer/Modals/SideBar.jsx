import React from "react";
import "./sidebar.css";
import { Avatar, Flex, Space, Typography } from "antd";
import {
  SpotifyFilled,
  UserOutlined,
  HistoryOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Home from "./SubModals/Home";
import { NavLink } from "react-router-dom";
import Song from "./SubModals/Song";

const { Title } = Typography;
const route = {
  "/home": <Home />,
  "/song": <Song />,
};
const SideBar = () => {
  return (
    <>
      <Flex vertical className="sidebar-contents space-align-container">
        <div className="space-align-block profile-block">
          <Space
            direction="horizontal"
            size={"large"}
            align="center"
            style={{ marginBottom: 1.5 }}
          >
            <Avatar size={{ xs: 24, sm: 32, md: 70, lg: 70, xl: 70, xxl: 55 }}>
              <UserOutlined style={{ fontSize: 40 }} />
            </Avatar>
            <Title style={{ color: "lightgray" }} level={3}>
              User Name
            </Title>
          </Space>
        </div>
        <div>
          <div className="list">
            <ul>
              <li>
                <HistoryOutlined />{" "}
                <span style={{ margin: 13 }}>Recently Added</span>
              </li>
              <li>
                <HomeOutlined />
                <NavLink to={"/app/home"} style={{ margin: 13 }}>
                  Home
                </NavLink>
              </li>
              <li>
                <img
                  style={{ width: 20, height: 20 }}
                  src="/src/assets/musicnote.png"
                />
                <NavLink to={"/app/song"} style={{ margin: 13 }}>
                  Song
                </NavLink>
              </li>
              <li>
                <span>
                  <img
                    style={{ width: 20, height: 20 }}
                    src="/src/assets/genre.png"
                  />
                </span>
                <span style={{ margin: 13 }}>Genre</span>
              </li>
              <li>
                <span>
                  <img
                    style={{ width: 20, height: 20 }}
                    src="/src/assets/playlist.png"
                  />
                </span>
                <span style={{ margin: 13 }}>Playlist</span>
              </li>
            </ul>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default SideBar;
