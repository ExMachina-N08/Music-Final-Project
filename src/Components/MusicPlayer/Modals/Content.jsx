import React from "react";
import { useLocation, Route, Routes, Outlet } from "react-router-dom";
import Home from "../Modals/SubModals/Home";
import Song from "../Modals/SubModals/Song";
import Genre from "./SubModals/Genre";
import Playlist from "./SubModals/Playlist";
import New from "./SubModals/New";
import AlbumItem from "./SubModals/AlbumItem";

const Contents = () => {
  // const location = useLocation();
  // console.log("location first", location);

  // // Define an object that maps paths to components
  // const routes = {
  //   "/app/home": <Home />,

  //   "/app/song": <Song />,
  //   "/app/genre": <Genre />,
  //   "/app/playlist": <Playlist />,
  //   "/app/new": <New />,
  // };

  // // Render the component based on the current path
  // const Component = routes[location.pathname] || <Home />; // Default to <Home /> if no path matches

  // return <>{Component}</>;
  return <Outlet />;
};
// sao làm routes ở đây a, khong lun sai rui, folder này tạo ra mục đích gì a  der render content cua thang ben sider ak
export default Contents;
// là sao, ý là cái này sinh ra để hiện content khi anh click vo TOP 50 GLOBAL dung k
// ko thang Home co cai dong item con thi a gom het cho render ben trong thang content thui
// sai rui a, anh p để 1 chỗ routes nó quản lý thoi, tạo lung tung mnot61 đuồng đâu mà lần :V
// giờ anh qua th main, tạo th routes khi bấm vào
