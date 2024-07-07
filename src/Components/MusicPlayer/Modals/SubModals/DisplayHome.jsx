import React from "react";
import AlbumItem from "./AlbumItem";
import { albumsData } from "../../../../assets/assets";
import { songsData } from "../../../../assets/assets";
import SongItems from "./SongItems";
const DisplayHome = () => {
  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </p>
      </div>
      <div className="my-5 font-bold text-2xl">
        <h1 className="my-5 font-bold text-2xl">Feature Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="my-5 font-bold text-2xl">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hit</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItems
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
