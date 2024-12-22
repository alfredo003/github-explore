import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../Dashboard";
import Respository from "../Repository";

const Router:React.FC = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repositories/:repository*" element={<Respository />} />
    </Routes>
  );
}


export default Router;


