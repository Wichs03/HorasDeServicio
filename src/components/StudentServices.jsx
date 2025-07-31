import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  AiOutlineFilePdf,
  AiOutlineEdit,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineClockCircle,
} from "react-icons/ai";
import axiosClient from "../api/axiosClient";

function EditReviewModal({ service, onClose, onSave }) {
  const [amountApproved, setAmountApproved] = useState(
    service.amount_approved ?? 0
  );
  const [comment, setComment] = useState(service.comment || "");
  const [status, setStatus] = useState(service.status);

  const statusOptions = [
    {
      value: "Pending",
      icon: <AiOutlineClockCircle />,
      color: "text-yellow-600",
    },
    { value: "Approved", icon: <AiOutlineCheck />, color: "text-green-600" },
    { value: "Rejected", icon: <AiOutlineClose />, color: "text-red-600" },
  ];

  const handleSave = () => {
    const dataToSave = {
      amount_approved: Number(amountApproved),
      comment: comment.trim(),
      status: status,
    };

    onSave(dataToSave);
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

function UpdateOwnModal({ service, onClose, onSave }) {
  const [description, setDescription] = useState(service.description);
  const [amount, setAmount] = useState(service.amount_reported);
  const [category, setCategory] = useState(service.category_id);

  const categories = [
    { id: 1, name: "Indexacion" },
    { id: 2, name: "Instructor" },
    { id: 3, name: "Liderazgo" },
    { id: 4, name: "Revision" },
    { id: 5, name: "Asistencia al templo" },
  ];

  const handleSave = () => {
    onSave({
      description,
      amount_reported: amount,
      category_id: category,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-950/20 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">Actualizar Servicio</h2>

        <label className="block mb-3">
          Categoría:
          <select
            value={category}
            onChange={(e) => setCategory(Number(e.target.value))}
            className="border p-2 mt-1 w-full rounded"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-3">
          Descripción:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 mt-1 w-full rounded"
          />
        </label>

        <label className="block mb-3">
          Horas reportadas:
          <input
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border p-2 mt-1 w-full rounded"
          />
        </label>

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
  const [updatingService, setUpdatingService] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    axiosClient
      .get("/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Error al cargar servicios:", err));

    axiosClient
      .get("/profile")
      .then((res) => setUserRole(res.data.role?.id))
      .catch((err) => console.error("Error al cargar perfil:", err));
  }, []);

  const handleDownload = (serviceId) => {
    const url = `https://www.hs-service.api.crealape.com/api/v1/evidence/${serviceId}`;
    window.open(url, "_blank");
  };

  const handleSaveEdit = async (editData) => {
    const statusMap = {
      Pending: "0",
      Approved: "1",
      Rejected: "2",
    };

    const formattedData = {
      amount_approved: editData.amount_approved,
      comment: editData.comment,
      status: statusMap[editData.status],
    };

    console.log("Datos que se enviarán:", formattedData);

    try {
      await axiosClient.patch(`/review/${editingService.id}`, formattedData);

      const getRes = await axiosClient.get(`/services/${editingService.id}`);

      setServices((prev) =>
        prev.map((s) => (s.id === editingService.id ? getRes.data : s))
      );

      setEditingService(null);
    } catch (error) {
      console.error("Error al guardar la revisión:", error);
      alert(error.response?.data?.message || "Error al guardar cambios");
    }
  };

  const handleUpdateOwn = async (updateData) => {
    try {
      await axiosClient.patch(`/services/${updatingService.id}`, updateData);

      const getRes = await axiosClient.get(`/services/${updatingService.id}`);

      setServices((prev) =>
        prev.map((s) => (s.id === updatingService.id ? getRes.data : s))
      );

      setUpdatingService(null);
    } catch (error) {
      console.error("Error al actualizar servicio:", error);
      alert(error.response?.data?.message || "Error al actualizar servicio");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="bg-gradient-to-b from-white to-gray-300 p-4 mt-15">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#05121b] via-[#2c75ba] to-[#05121b] text-transparent bg-clip-text drop-shadow-lg tracking-wide">

          Horas de Servicio
        </h1>

        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row gap-4 items-stetch justify-center w-full mx-auto"
            >
              {/* CARD IZQUIERDA */}
              <div className="bg-gradient-to-br from-gray-200 to-white backdrop-blur-sm border border-gray-300 shadow rounded-xl p-4 w-full max-w-md text-sm flex-1 transform transition-transform duration-300 hover:scale-105">
                {service.user && (
                  <p className="font-semibold text-base">
                    {service.user.full_name}
                  </p>
                )}
                <p className="text-gray-700">
                  Categoría:{" "}
                  <span className="font-medium">{service.category?.name}</span>
                </p>
                <p className="text-gray-700">
                  Descripción:{" "}
                  <span className="font-medium">{service.description}</span>
                </p>
                <p className="text-gray-700">
                  Horas reportadas:{" "}
                  <span className="font-medium">{service.amount_reported}</span>
                </p>
                <button
                  onClick={() => handleDownload(service.id)}
                  title="Ver PDF"
                  className="text-blue-600 hover:text-blue-800 text-xl"
                >
                  <AiOutlineFilePdf />
                </button>
              </div>

              {/* CARD DERECHA */}
              <div className="bg-gradient-to-br from-white to-gray-200 backdrop-blur-sm border border-gray-300 shadow rounded-xl p-4 w-full max-w-md text-sm flex-1 transform transition-transform duration-300 hover:scale-105">
                <p>
                  Estado:{" "}
                  <span
                    className={
                      service.status === "Approved"
                        ? "text-green-600 font-semibold"
                        : service.status === "Rejected"
                        ? "text-red-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                    }
                  >
                    {service.status}
                  </span>
                </p>
                {service.comment && (
                  <p className="text-gray-600 italic">
                    Comentario: {service.comment}
                  </p>
                )}
                <p>Horas aprobadas: {service.amount_approved ?? "—"}</p>

                {(userRole === 1 || userRole === 2) && (
                  <button
                    onClick={() => setEditingService(service)}
                    title="Editar"
                    className="text-yellow-600 hover:text-yellow-800 text-xl"
                  >
                    <AiOutlineEdit />
                  </button>
                )}

                {userRole === 4 && service.status === "Pending" && (
                  <button
                    onClick={() => setUpdatingService(service)}
                    title="Actualizar"
                    className="text-green-600 hover:text-green-800 text-xl"
                  >
                    <AiOutlineEdit />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MODALES */}
        {editingService && (userRole === 1 || userRole === 2) && (
          <EditReviewModal
            service={editingService}
            onClose={() => setEditingService(null)}
            onSave={handleSaveEdit}
          />
        )}

        {updatingService && userRole === 4 && (
          <UpdateOwnModal
            service={updatingService}
            onClose={() => setUpdatingService(null)}
            onSave={handleUpdateOwn}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
