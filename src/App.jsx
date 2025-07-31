import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service-hours" element={<StudentDashboard></StudentDashboard>} />
      <Route path="*" element={<h1 className="text-5xl">404 Not Found</h1>} />
    </Routes>
  );
}
