import React, { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";

export default function CreateUserModal({
  isOpen,
  onClose,
  onUserCreated,
  selectedRoleId,
}) {
  const [formData, setFormData] = useState({
    f_name: "",
    s_name: "",
    f_lastname: "",
    s_lastname: "",
    email: "",
    password: "",
    role_id: selectedRoleId,
    schools: [1],
    controller_id: 2, // Puedes ajustarlo según lo necesario
    recruiter_id: 3, // Puedes ajustarlo según lo necesario
  });

  const [controllers, setControllers] = useState([]);
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);

  const isStudent = selectedRoleId === 4; // Verifica si el rol es "Student"

  const fetchOptions = async () => {
    try {
      const [resControllers, resSchools] = await Promise.all([
        axiosClient.get("/controllers"),
        axiosClient.get("/schools"),
      ]);
      setControllers(resControllers.data);
      setSchools(resSchools.data);
    } catch (err) {
      console.error("Error al cargar opciones:", err);
      setError("Error al cargar las opciones.");
    }
  };

  useEffect(() => {
    if (isOpen && isStudent) {
      fetchOptions();
    }
  }, [isOpen, isStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post("/users", formData);
      onUserCreated();
      onClose();
    } catch (err) {
      console.error(
        "Error al crear usuario:",
        err.response?.data || err.message
      );
      alert("No se pudo crear el usuario.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[#06385e]">
          Crear Nuevo Usuario
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="f_name"
            placeholder="Nombre *"
            value={formData.f_name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="s_name"
            placeholder="Segundo Nombre"
            value={formData.s_name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="f_lastname"
            placeholder="Primer Apellido*"
            value={formData.f_lastname}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="s_lastname"
            placeholder="Segundo Apellido*"
            value={formData.s_lastname}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña *"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          {isStudent && (
            <>
              <select
                name="controller_id"
                value={formData.controller_id}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              >
                <option value="">Seleccionar Controller</option>
                {controllers.map((controller) => (
                  <option key={controller.id} value={controller.id}>
                    {controller.name}
                  </option>
                ))}
              </select>

              <select
                name="school_id"
                value={formData.school_id}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              >
                <option value="">Seleccionar Escuela</option>
                {schools.map((school) => (
                  <option key={school.id} value={school.id}>
                    {school.name}
                  </option>
                ))}
              </select>
            </>
          )}

          <button
            type="submit"
            className="bg-[#06385e] text-white py-2 rounded hover:scale-105 transition-transform"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}
