import React from "react";
import useStudentHour from "/src/Hooks/useStudentHour";
import GaugeProgress from "./GaugeProgress";

export default function ProfileSidebar() {
  const { approvedHours, totalHours } = useStudentHour();

  return (
    <div className="w-full flex justify-center px-4">
      <div className="bg-white shadow-lg rounded-md p-4 w-full md:w-[320px] h-auto border border-gray-200">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden mb-4 mt-3">
            <img
              src="/profileUsers.png"
              alt="FotoPerfil"
              className="w-full h-full object-cover rounded-full border-4 border-blue-800"
            />
          </div>

          <h2 className="text-xl font-bold text-center mb-4">
            Edwin Dario Alzate López
          </h2>

          <button className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded mb-4 text-md font-semibold">
            ✎ Editar perfil
          </button>

          <div className="w-full text-md mt-2">
            <div className="border border-gray-200 p-3 mb-4 rounded">
              <p className="font-semibold text-gray-800 mb-1">
                Información Personal
              </p>
              <p className="mt-1">
                <strong>Dirección de correo:</strong>
              </p>
              <a
                href="https://outlook.live.com/mail/0/"
                className="text-blue-500 break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                edal905@hotmail.com
              </a>
              <p className="mt-2">
                <strong>Ciudad:</strong>
              </p>
              <p>Colombia</p>
            </div>

            <div className="flex flex-row justify-center gap-6 w-[90%] mt-6 border border-gray-200 p-3 mb-4 ml-3 rounded">
              <GaugeProgress value={approvedHours} max={20} label="Aprobadas" />
              <GaugeProgress value={totalHours} max={20} label="Total" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
