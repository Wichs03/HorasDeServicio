import React from "react";

export default function ProfileSidebar() {
  return (
    <div className="bg-white shadow-md rounded-md p-4 lg:w-[25%] h-[500px]">
      <div className="flex flex-col items-center">
        <div className="w-35 h-35 rounded-full bg-gray-300 mb-4">
          <img
            src="/Avatar.jpg"
            alt="FotoPerfil"
            className="rounded-full border-3 border-blue-800"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-center mb-3">
            Edwin Dario Alzate López
          </h2>
          <button className="cursor-pointer bg-blue-600 text-white px-10 py-2 rounded mb-4 text-md font-semibold">
            ✎ Editar perfil
          </button>
          <div className="text-md w-full">
            <p className="font-semibold">Información Personal</p>
            <p className="mt-2">
              <strong>Dirección de correo:</strong>
            </p>

            <a
              href="https://outlook.live.com/mail/0/"
              className="text-blue-500"
              target="_blank"
              rel="e-mail"
            >
              edal905@hotmail.com
            </a>
            <p className="mt-2">
              <strong>Ciudad:</strong>
            </p>
            <p>Colombia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
