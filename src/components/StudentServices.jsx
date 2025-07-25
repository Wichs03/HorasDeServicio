import { useEffect, useState } from "react";
import {
  AiOutlineFilePdf,
  AiOutlineEdit,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineClockCircle,
} from "react-icons/ai";

function EditReviewModal({ service, onClose, onSave }) {
  const [amountApproved, setAmountApproved] = useState(service.amount_approved ?? 0);
  const [comment, setComment] = useState(service.comment || "");
  const [status, setStatus] = useState(service.status);

  const statusOptions = [
    { value: "Pending", icon: <AiOutlineClockCircle />, color: "text-yellow-600" },
    { value: "Approved", icon: <AiOutlineCheck />, color: "text-green-600" },
    { value: "Rejected", icon: <AiOutlineClose />, color: "text-red-600" },
  ];

  const handleSave = () => {
    onSave({
      amount_approved: amountApproved,
      comment,
      status,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-950/20 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">Editar revisión</h2>

        <label className="block mb-3">
          Horas aprobadas:
          <input
            type="number"
            min={0}
            value={amountApproved}
            onChange={(e) => setAmountApproved(Number(e.target.value))}
            className="border p-2 mt-1 w-full rounded"
          />
        </label>

        <label className="block mb-3">
          Comentario:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-2 mt-1 w-full rounded resize-y"
            rows={3}
          />
        </label>

        <div className="mb-4 flex gap-4">
          {statusOptions.map(({ value, icon, color }) => (
            <button
              key={value}
              onClick={() => setStatus(value)}
              title={value}
              className={`text-2xl p-1 rounded hover:bg-gray-100 transition-colors ${
                status === value ? `${color} bg-gray-200` : "text-gray-400"
              }`}
            >
              {icon}
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function StudentServices() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetch("https://www.hs-service.api.crealape.com/api/v1/services", {
      method: "GET",
      headers: { Accept: "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error al cargar servicios:", err));
  }, []);

  const handleDownload = (serviceId) => {
    const url = `https://www.hs-service.api.crealape.com/api/v1/evidence/${serviceId}`;
    window.open(url, "_blank");
  };

  const handleSaveEdit = async (editData) => {
    try {
      const res = await fetch(
        `https://www.hs-service.api.crealape.com/api/v1/review/${editingService.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
          body: JSON.stringify(editData),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Error al guardar la revisión");
        return;
      }
      const updated = await res.json();
      setServices((prev) =>
        prev.map((s) => (s.id === editingService.id ? { ...s, ...updated } : s))
      );
      setEditingService(null);
    } catch (error) {
      alert("Error al guardar cambios");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Horas de Servicio</h1>
      <div className="grid grid-cols-1 gap-4 place-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full max-w-xl grid grid-cols-3 gap-3 items-center p-3 bg-white shadow rounded-lg text-sm"
          >
            <div>
              <p className="font-semibold">{service.description}</p>
              {service.user && (
                <p className="text-xs text-gray-500 italic">
                  De: {service.user.full_name}
                </p>
              )}
              <p className="text-xs text-gray-500">Categoría: {service.category?.name}</p>
              <p className="text-xs">
                Estado:{" "}
                <span
                  className={
                    service.status === "Approved"
                      ? "text-green-600"
                      : service.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }
                >
                  {service.status}
                </span>
              </p>
              {/* Comentario visible debajo del estado */}
              {service.comment && (
                <p className="text-xs italic text-gray-600 mt-1">Comentario: {service.comment}</p>
              )}
            </div>

            <div>
              <p>Reportadas: {service.amount_reported}</p>
              <p>Aprobadas: {service.amount_approved ?? "—"}</p>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => handleDownload(service.id)}
                title="Ver PDF"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <AiOutlineFilePdf />
              </button>

              <button
                onClick={() => setEditingService(service)}
                title="Editar"
                className="text-yellow-600 hover:text-yellow-800 text-xl"
              >
                <AiOutlineEdit />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingService && (
        <EditReviewModal
          service={editingService}
          onClose={() => setEditingService(null)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}


