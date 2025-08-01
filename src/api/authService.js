// src/api/authService.js
import axiosClient from "./axiosClient";

export async function login(email, password) {
  const res = await axiosClient.post("/auth/login", { email, password });
  localStorage.setItem("isLoggedIn", "true");
  
  return res.data;
}

export const logout = async () => {
  try {
    await axiosClient.post("/auth/logout");
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  } catch (err) {
    console.error("Error en logout:", err);
    window.location.href = "/login";
  }
};
