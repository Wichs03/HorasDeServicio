import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Aquí guardaremos la info del usuario
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Si quieres, aquí podrías agregar persistencia con localStorage/sessionStorage

  // Función para actualizar el usuario y marcar login
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    // Podrías guardar en localStorage aquí si quieres persistir
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    // Borrar localStorage si usas persistencia
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
