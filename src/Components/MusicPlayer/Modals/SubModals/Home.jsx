import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome";

const Home = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-black text-white overflow-auto lg:w-[75%] lg:ml-0">
      <DisplayHome></DisplayHome>
    </div>
  );
};

export default Home;
