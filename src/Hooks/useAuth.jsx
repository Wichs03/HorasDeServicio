import { createContext, useContext, useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para obtener el usuario desde la API
  const fetchUser = async () => {
    try {
      const res = await axiosClient.get("/users/me");
      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      setUser(null);
      localStorage.removeItem("user");
      return null;
    }
  };

  // Función para establecer el usuario (usada después del login)
  const setUserData = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  };

  // Función para logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  };

  // Cargar usuario al inicializar
  useEffect(() => {
    const initializeAuth = async () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (isLoggedIn) {
        // Intentar obtener usuario desde localStorage primero
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
          } catch (error) {
            console.error("Error al parsear usuario del localStorage:", error);
          }
        }

        // Luego hacer fetch desde la API para asegurar datos actualizados
        await fetchUser();
      }

      setLoading(false);
    };

    initializeAuth();
  }, []);

  const value = {
    user,
    loading,
    setUserData,
    logout,
    fetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
