import React from "react";
import { useParams } from "react-router-dom";
import { albumsData } from "../../../../assets/assets";
const Album = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  console.log(albumData);
  return <div>Album {id}</div>;
};

export default Album;
