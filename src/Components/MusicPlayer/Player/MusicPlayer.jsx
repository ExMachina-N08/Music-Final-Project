import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flex, Layout } from "antd";
import Playbar from "../Modals/Playbar";
import TopBar from "../Modals/TopBar";
import SideBar from "../Modals/SideBar";
import Contents from "../Modals/Content";
import "./musicplayer.css";
import { Outlet, useLocation, Route, Routes } from "react-router-dom";
import Home from "../Modals/SubModals/Home";
import Song from "../Modals/SubModals/Song";
//framer Motion

// useNavigation
// const location = useLocation();
// console.log("location first", location);

//Ant Design
const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  borderRadius: 15,
  width: "98vw",
  minHeight: "95vh",
  overflow: "hidden",
  position: "relative",
};

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 60, // Header height
  paddingInline: 20,
  lineHeight: "25px",
  zIndex: 1, // Ensure the header is above the content
  width: "84%", // Make the header take full width to the right
  position: "fixed",
  top: 10,
};

const contentStyle = {
  textAlign: "center",
  lineHeight: "25px",
  marginTop: 65, // Space below the header, equals header height
  height: "calc(100vh - 65px)", // Adjust the height to account for the header
  color: "#fff",
  overflow: "auto",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "50px",
  color: "#fff",
  zIndex: 1,
  position: "sticky",
  top: 10, // Ensure the Sider sticks to the top
  height: "95vh",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  position: "fixed",
  left: 20,
  right: 0,
  bottom: 0,
  zIndex: 2,
};

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="music-page">
      <Layout style={layoutStyle}>
        <Sider
          width="15%"
          style={siderStyle}
          className="sider"
          activeClassName="text-green-500"
        >
          {<SideBar />}
        </Sider>
        <Layout>
          <Flex
            justify="end"
            align="center"
            vertical={false}
            style={headerStyle}
            className=" topbar"
          >
            <TopBar />
          </Flex>

          <Content style={contentStyle} className="content">
            {<Contents />}
          </Content>
        </Layout>
      </Layout>

      <motion.div
        layout
        initial={{ borderRadius: 15 }}
        style={footerStyle}
        className="player"
        data-isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Playbar />
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
