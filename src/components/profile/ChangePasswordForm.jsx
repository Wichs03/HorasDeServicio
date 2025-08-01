import React, { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { RxCross2 } from "react-icons/rx";

export default function ChangePasswordForm({ toggleModal }) {
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axiosClient.put("/auth/change-password", formData);
      setMessage("Contraseña actualizada correctamente");
      setFormData({ old_password: "", new_password: "" });
    } catch (error) {
      console.error("Error al cambiar contraseña:", error);
      setMessage("No se pudo cambiar la contraseña");
    } finally {
      setLoading(false);
    }
  };

  function modalOut(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
}

  return (
    <>
      <div onClick={modalOut} className="fixed inset-0 bg-black/60 flex items-center justify-center z-200">
        <form id="form" onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <div className="w-full flex justify-end items-center">
            <RxCross2 onClick={toggleModal} className="cursor-pointer" />
          </div>
          <h2 className="text-xl font-bold mb-6 text-center">Cambiar Contraseña</h2>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="old_password"
              id="old_password"
              value={formData.old_password}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                     border-0 border-b-2 border-gray-300 appearance-none 
                     focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="old_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
                     transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6">
              Contraseña Actual
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="new_password"
              id="new_password"
              value={formData.new_password}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                     border-0 border-b-2 border-gray-300 appearance-none 
                     focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="new_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
                     transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6">
              Nueva Contraseña
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                   focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
            {loading ? "Actualizando..." : "Cambiar Contraseña"}
          </button>

          {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
        </form>
      </div>
    </>
  );
}
