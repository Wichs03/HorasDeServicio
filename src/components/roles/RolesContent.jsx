import React, { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import RoleCard from "./RoleCard";
import UserCards from "./UserCards";

export default function RolesContent() {
  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Controller" },
    { id: 3, name: "Recruiter" },
    { id: 4, name: "Student" },
  ];

  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    f_name: "",
    s_name: "",
    f_lastname: "",
    s_lastname: "",
    email: "",
    password: "",
    controller_id: "",
    recruiter_id: "",
    school_id: "",
    country_id: "",
  });

  const [controllers, setControllers] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [schools, setSchools] = useState([]);

  const selectedRole = roles.find((r) => r.id === selectedRoleId);

  const handleSelectRole = async (roleId) => {
    setSelectedRoleId(roleId);
    setLoading(true);
    setError(null);

    try {
      const res = await axiosClient.get("/users", { params: { r: roleId } });
      setUsers(res.data);
    } catch (err) {
      console.error(
        "Error al cargar usuarios:",
        err.response?.data || err.message
      );
      setError("No se pudieron cargar los usuarios.");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchOptions = async () => {
    try {
      const [resControllers, resRecruiters, resSchools] = await Promise.all([
        axiosClient.get("/users", { params: { r: 2 } }),
        axiosClient.get("/users", { params: { r: 3 } }),
        axiosClient.get("/schools"),
      ]);
      setControllers(resControllers.data);
      setRecruiters(resRecruiters.data);
      setSchools(resSchools.data);
    } catch (err) {
      console.error("Error al cargar opciones:", err);
    }
  };

  useEffect(() => {
    if (showModal && selectedRole?.name === "Student") {
      fetchOptions();
    }
  }, [showModal, selectedRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      f_name: formData.f_name,
      s_name: formData.s_name,
      f_lastname: formData.f_lastname,
      s_lastname: formData.s_lastname,
      email: formData.email,
      password: formData.password,
      role_id: selectedRoleId,
      schools: formData.school_id ? [parseInt(formData.school_id)] : [],
      controller_id: formData.controller_id
        ? parseInt(formData.controller_id)
        : null,
      recruiter_id: formData.recruiter_id
        ? parseInt(formData.recruiter_id)
        : null,
      country_id: formData.country_id ? parseInt(formData.country_id) : null,
    };

    try {
      await axiosClient.post("/users", body);
      setShowModal(false);
      setFormData({
        f_name: "",
        s_name: "",
        f_lastname: "",
        s_lastname: "",
        email: "",
        password: "",
        controller_id: "",
        recruiter_id: "",
        school_id: "",
      });
      handleSelectRole(selectedRoleId);
    } catch (err) {
      console.error(
        "Error al crear usuario:",
        err.response?.data || err.message
      );
      alert("No se pudo crear el usuario.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-17 bg-gradient-to-b from-white to-[#c0def3] min-h-screen">
        <main className="p-6 flex flex-col items-center">
          <h1 className="text-center text-5xl font-bold text-[#06385e] mb-10">
            USER ROLES
          </h1>
          <div className="bg-[#06385e] rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 border-4 border-gray-200 p-6">
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} onClick={handleSelectRole} />
            ))}
          </div>

          {loading && (
            <p className="text-lg text-[#06385e]">Cargando usuarios...</p>
          )}
          {error && <p className="text-red-500">{error}</p>}

          {selectedRoleId && !loading && (
            <>
              <div className="flex flex-row gap-20 items-center mt-10 mb-6">
                <h2 className="text-3xl font-semibold text-[#06385e]">
                  Usuarios con rol: {selectedRole?.name}
                </h2>
                <button
                  onClick={() => setShowModal(true)}
                  className="cursor-pointer bg-[#06385e] text-white px-4 h-12 rounded mb-4 text-xs font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Agregar {selectedRole?.name}
                </button>
              </div>
              <UserCards users={users} />
            </>
          )}
        </main>
      </div>
      <Footer />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#06385e]">
              Crear {selectedRole?.name}
            </h2>
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
                placeholder="Segundo nombre"
                value={formData.s_name}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="f_lastname"
                placeholder="Apellido paterno *"
                value={formData.f_lastname}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="s_lastname"
                placeholder="Apellido materno *"
                value={formData.s_lastname}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
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
              <select
                name="country_id"
                value={formData.country_id}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              >
                <option value="">Seleccionar país</option>
                <option value="1">País 1</option>
                <option value="2">País 2</option>
                <option value="3">País 3</option>
              </select>

              {selectedRole?.name === "Student" && (
                <>
                  <select
                    name="controller_id"
                    value={formData.controller_id}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                  >
                    <option value="">Seleccionar controller</option>
                    {controllers.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.full_name}
                      </option>
                    ))}
                  </select>
                  <select
                    name="recruiter_id"
                    value={formData.recruiter_id}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                  >
                    <option value="">Seleccionar recruiter</option>
                    {recruiters.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.full_name}
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
                    <option value="">Seleccionar escuela</option>
                    {schools.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
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
      )}
    </div>
  );
}
