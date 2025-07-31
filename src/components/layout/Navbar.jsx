import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout as logoutService } from "../../api/authService";
import { useAuth } from "../../Hooks/useAuth.jsx";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { logout: logoutContext } = useAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logoutService();
      logoutContext(); // Limpiar el estado del contexto
      navigate("/login");
    } catch (error) {
      console.error("Error en logout:", error);
      // Aún así limpiar el estado local
      logoutContext();
      navigate("/login");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="bg-gradient-to-b from-gray-200 to-white shadow-lg px-6 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* LOGO FUNVAL */}
      <div className="flex items-center space-x-6 md:ml-15">
        <Link to="/home">
          <h1 className="text-[#06385e] text-4xl font-bold flex justify-center items-center gap-[2px]">
            <span>FUNV</span>
            <img
              src="/favicon A 32.ico"
              alt="A"
              className="w-7 h-7 inline-block"
            />
            <span>L</span>
          </h1>
        </Link>
      </div>

      {/* MENU DROPDOWN */}
      <div className="relative md:mr-15" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-center bg-white border shadow-md rounded-full w-10 h-10 text-gray-800 hover:bg-gray-300 transition cursor-pointer"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute border border-gray-300 right-0 mt-2 w-35 bg-white shadow-lg rounded-lg z-50">
            {/* HOME */}
            <Link
              to="/home"
              className="text-md font-semibold block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Home
            </Link>

            {/* SERVICIOS */}
            <Link
              to="/servicios"
              className="text-md font-semibold block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Servicios
            </Link>

            {/* PROFILE */}
            <Link
              to="/profile"
              className="text-md font-semibold block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Profile Users
            </Link>
            {/* LOG OUT */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`cursor-pointer font-semibold block px-4 py-2 rounded-lg hover:bg-gray-100 w-full text-left ${
                isLoggingOut ? "text-gray-400" : "text-red-600"
              }`}
            >
              {isLoggingOut ? "Cerrando sesión..." : "Cerrar Sesión"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
