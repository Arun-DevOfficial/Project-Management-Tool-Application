import React from "react";
import Dashboard from "../Components/Dashboard";
import Content from "../Components/Content";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Dashboard />
        <Content />
      </div>
    </>
  );
};

export default Home;
