import React from "react";
import { motion } from "framer-motion";
import { Layout } from "antd";
import Playbar from "./Modals/Playbar";
import TopBar from "./Modals/TopBar";
import SideBar from "./Modals/SideBar";
import Contents from "./Modals/Content";
import "./musicplayer.css";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 65,
  paddingInline: 48,
  lineHeight: "64px",
  // backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
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
const layoutStyle = {
  borderRadius: 10,

  width: "98vw",
  minHeight: "95vh",
  overflow: "hidden",

  // width: "calc(100% - 10px)",
  // maxWidth: "calc(100% - 8px)",
};
const MusicPlayer = () => {
  return (
    <div className="music-page">
      <Layout style={layoutStyle}>
        <Header style={headerStyle} className="topbar">
          <TopBar />
        </Header>
        <Layout>
          <Sider width="15%" style={siderStyle} className="sider">
            <SideBar />
          </Sider>
          <Content style={contentStyle} className="content">
            <Contents />
          </Content>
        </Layout>
        <Footer style={footerStyle} className="player">
          <Playbar />
        </Footer>
      </Layout>
    </div>
  );
};

export default MusicPlayer;
