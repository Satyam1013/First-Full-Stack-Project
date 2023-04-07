import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Notes from "../components/Notes";
import Signup from "../components/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
};

export default AllRoutes;
