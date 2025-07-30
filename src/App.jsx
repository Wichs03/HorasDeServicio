import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; // Ojo, debe ser 'react-router-dom'
import Home from "./pages/Home";
import Landing from "./pages/Landing";

import Login from "./pages/Login"; // Usa el tuyo
import StudentServices from "./components/StudentServices";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/login"
        element={<Login onLogin={() => setIsLoggedIn(true)} />}
      />
      <Route
        path="/servicios"
        element={
          isLoggedIn ? (
            <StudentServices />
          ) : (
            <Login onLogin={() => setIsLoggedIn(true)} />
          )
        }
      />
      <Route path="*" element={<h1 className="text-5xl">404 Not Found</h1>} />
    </Routes>
  );
}

