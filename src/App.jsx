import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/LogIn";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="*" element={<h1 className="text-5xl">404 Not Found</h1>} />
      </Routes>
    </>
  );
}
