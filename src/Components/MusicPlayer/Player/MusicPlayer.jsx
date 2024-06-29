import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flex, Layout } from "antd";
import Playbar from "../Modals/Playbar";
import TopBar from "../Modals/TopBar";
import SideBar from "../Modals/SideBar";
import Contents from "../Modals/Content";
import "./musicplayer.css";

//framer Motion

//Ant Design
const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  borderRadius: 15,
  width: "98vw",
  minHeight: "95vh",
  overflow: "hidden",
  zIndex: "-1",

  // width: "calc(100% - 10px)",
  // maxWidth: "calc(100% - 8px)",
};

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 65,
  paddingInline: 20,
  lineHeight: "64px",

  // backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  // minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  // backgroundColor: "#0958d9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  // backgroundColor: "#1677ff",
  zIndex: 1,
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  // backgroundColor: "#4096ff",
  zIndex: 99,
};

const MusicPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="music-page">
      <Layout style={layoutStyle}>
        <Sider width="15%" style={siderStyle} className="sider">
          <SideBar />
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
            <Contents />
          </Content>
        </Layout>
        <motion.div
          layout
          initial={{ borderRadius: 15 }}
          style={footerStyle}
          className="player"
          data-isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div>
            <Playbar />
          </motion.div>
        </motion.div>
      </Layout>
    </div>
  );
};

export default MusicPlayer;
