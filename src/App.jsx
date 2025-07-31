import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Profile from "./components/profile/ProfileContent";
import StudentServices from "./components/StudentServices";
import Report from "./pages/Report";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/servicios" element={<StudentServices />} />
      <Route path="/report" element={<Report></Report>} />
      <Route path="*" element={<h1 className="text-5xl">404 Not Found</h1>} />
    </Routes>
  );
}
