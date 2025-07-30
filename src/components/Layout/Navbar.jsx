import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* LOGO FUNVAL */}
      <div className="flex items-center space-x-6 md:ml-15">
        <h1 className="text-[#06385e] text-3xl font-bold flex justify-center items-center gap-[2px]">
          <span>FUNV</span>
          <img
            src="/favicon A 32.ico"
            alt="A"
            className="w-6 h-6 inline-block"
          />
          <span>L</span>
        </h1>

        <Link
          to="/home"
          className="text-gray-700 font-semibold hover:text-blue-600 md:ml-10"
        >
          Home
        </Link>

        <Link
          to="/servicios"
          className="text-gray-700 font-semibold hover:text-blue-600"
        >
          Categorias de Servicios
        </Link>
      </div>

      {/* MENU DROPDOWN */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10 text-gray-800 hover:bg-gray-300 transition cursor-pointer"
          aria-label="Abrir menú"
        >
          {/* Ícono hamburguesa */}
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
          <div className="absolute border border-gray-300 right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
            <Link
              to="/profile"
              className="text-md font-semibold block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Profile Users
            </Link>
            <button
              className="text-md font-bold w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setIsDropdownOpen(false);
                alert("Cerrar sesión");
              }}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
