import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Assign from "./Pages/TaskAssign";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taskassign" element={<Assign />} />
      </Routes>
    </>
  );
};

export default App;
