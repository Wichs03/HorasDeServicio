import React, { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function FormForHours({ categories }) {
  const [formData, setFormData] = useState({
    amount_reported: "",
    description: "",
    category_id: "",
    evidence: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Si el input es de tipo file
    if (name === "evidence") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      data.append("amount_reported", formData.amount_reported);
      data.append("description", formData.description);
      data.append("category_id", formData.category_id);
      if (formData.evidence) data.append("evidence", formData.evidence);

      const response = await axiosClient.post("/services", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Servicio creado correctamente");
      console.log("Respuesta:", response.data);
    } catch (error) {
      console.error("Error al crear servicio:", error.response?.data || error);
      setMessage("Error al crear el servicio");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center p-2 uppercase text-blue-950">
        <h3 className="text-3xl font-bold text-center">Registra tus Horas de Servicio</h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[80%] p-4 rounded inset-shadow-sm inset-shadow-gray-400 flex flex-col items-center justify-center gap-4 m-5 text-blue-950 mb-20 md:shadow-lg/20 md:inset-shadow-sm md:inset-shadow-white md:w-[60%]">
        <h2 className="text-2xl font-bold">Formulario</h2>

        <div className="w-full flex flex-col gap-4 md:flex-row md:mt-5 md:gap-8">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <label className="mb-1 font-semibold">Numero de Horas</label>
              <input
                type="number"
                name="amount_reported"
                placeholder="Monto reportado"
                value={formData.amount_reported}
                onChange={handleChange}
                className="p-2 w-full rounded bg-slate-100 focus:outline-none inset-shadow-sm inset-shadow-gray-300"
                required
              />
            </div>

            <div className="w-full flex flex-col">
              <label className="mb-1 font-semibold">Descripción</label>
              <textarea
                name="description"
                placeholder="Escribe la descripción..."
                value={formData.description}
                onChange={handleChange}
                className="p-2 w-full rounded bg-slate-100 focus:outline-none resize-none inset-shadow-sm inset-shadow-gray-300"
                rows={1}
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col">
              <label className="mb-1 font-semibold">Categoría</label>
              <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className={`p-2 w-full rounded bg-slate-100 focus:outline-none inset-shadow-sm inset-shadow-gray-300 ${
                  formData.category_id === "" ? "text-slate-400" : "text-blue-950"
                }`}
                required>
                <option value="" disabled hidden>
                  Selecciona una categoría
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="text-blue-950">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full flex flex-col">
              <label className="mb-1 font-semibold">Evidencia</label>

              <label className="w-full cursor-pointer bg-slate-100 py-2 px-4 rounded text-gray-600 hover:bg-gray-300 inset-shadow-sm inset-shadow-gray-300">
                {formData.evidence ? formData.evidence.name : "Sube tu archivo aquí"}
                <input
                  type="file"
                  name="evidence"
                  accept="application/pdf"
                  onChange={handleChange}
                  className="hidden inset-shadow-sm inset-shadow-gray-400"
                />
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white mt-5 py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400 drop-shadow-[0_0_5px_rgba(0,50,255,0.3)] hover:drop-shadow-[0_0_5px_rgba(0,50,255,0.6)] transition-all duration-300"
          disabled={loading}>
          {loading ? "Creando..." : "Crear Servicio"}
        </button>

        {message && <p className="mt-2 text-center">{message}</p>}
      </form>
    </div>
  );
}
