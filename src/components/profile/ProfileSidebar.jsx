import React, { useEffect } from "react";
import useStudentHour from "/src/Hooks/useStudentHour";
import GaugeProgress from "./GaugeProgress";

export default function ProfileSidebar({
  setEditMode,
  editMode,
  viewProfile,
  setViewProfile,
  loading,
  user,
  profileRef,
}) {
  const { approvedHours, totalHours } = useStudentHour();

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile && viewProfile && profileRef?.current) {
      profileRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [viewProfile, editMode]);

  return (
    <>
      {loading ? (
        <div className="w-full flex justify-center px-4">
          <div className="bg-white shadow-lg rounded-md p-4 w-full md:w-[320px] h-auto border border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden mb-4 mt-3">
                <img
                  src="/profileUsers.png"
                  alt="FotoPerfil"
                  className="w-full h-full object-cover rounded-full border-4 border-blue-800 animate-pulse"
                />
              </div>

              <h2 className="text-xl text-slate-500 font-bold text-center mb-4 animate-pulse">
                Nombre de Usuario
              </h2>

              <div className="flex items-center justify-between gap-3">
                {viewProfile ? (
                  <button className=" bg-teal-800 text-transparent px-4 py-2 rounded mb-4 text-xs font-semibold animate-pulse">
                    Modo Vista
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setViewProfile(true);
                      setEditMode(false);
                    }}
                    className="cursor-pointer bg-teal-600 text-transparent px-4 py-2 rounded mb-4 text-xs font-semibold animate-pulse">
                    Ver Perfil
                  </button>
                )}
                {editMode ? (
                  <button className=" bg-gray-400 text-transparent px-4 py-2 rounded mb-4 text-xs font-semibold animate-pulse">
                    Modo de Edicion
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditMode(true);
                      setViewProfile(false);
                    }}
                    className="cursor-pointer bg-blue-600 text-transparent px-4 py-2 rounded mb-4 text-xs font-semibold animate-pulse">
                    ✎ Editar perfil
                  </button>
                )}
              </div>

              <div className="w-full text-md mt-2">
                <div className="border border-gray-200 p-3 mb-4 rounded">
                  <p className="font-semibold mb-1 text-transparent w-fit bg-slate-400 rounded-full h-4 pr-20 animate-pulse">
                    Información Personal
                  </p>
                  <p className="my-1 text-transparent w-fit bg-slate-400 rounded-full h-4 pr-20 animate-pulse">
                    <strong>Dirección de correo:</strong>
                  </p>
                  <p className="text-transparent w-fit bg-slate-400 rounded-full h-4 mb-4 animate-pulse">
                    edal905@hotmail.com
                  </p>
                  <p className="my-2 text-transparent w-fit bg-slate-400 rounded-full h-4 pr-20 animate-pulse">
                    <strong>Ciudad:</strong>
                  </p>
                  <p className="text-transparent w-fit bg-slate-400 rounded-full h-4 pr-20 animate-pulse">
                    Colombia
                  </p>
                </div>

                <div className="flex flex-row justify-center gap-6 w-[90%] mt-6 border border-gray-200 p-3 mb-4 ml-3 rounded">
                  <GaugeProgress value={approvedHours} max={20} label="Aprobadas" />
                  <GaugeProgress value={totalHours} max={20} label="Total" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
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

              <h2 className="text-xl font-bold text-center mb-4">{user.full_name}</h2>

              <div className="flex items-center justify-between gap-3">
                {viewProfile ? (
                  <button onClick={() => {
                      setViewProfile(false);
                      setEditMode(false);
                    }}
                    className=" bg-teal-800 text-white px-4 py-2 rounded mb-4 text-xs font-semibold">
                    Modo Vista
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setViewProfile(true);
                      setEditMode(false);
                    }}
                    className="cursor-pointer bg-teal-600 text-white px-4 py-2 rounded mb-4 text-xs font-semibold">
                    Ver Perfil
                  </button>
                )}
                {editMode ? (
                  <button className=" bg-gray-400 text-white px-4 py-2 rounded mb-4 text-xs font-semibold">
                    Modo de Edicion
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditMode(true);
                      setViewProfile(false);
                    }}
                    className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded mb-4 text-xs font-semibold">
                    ✎ Editar perfil
                  </button>
                )}
              </div>

              <div className="w-full text-md mt-2">
                <div className="border border-gray-200 p-3 mb-4 rounded">
                  <p className="font-semibold text-gray-800 mb-1">Información Personal</p>
                  <p className="mt-1">
                    <strong>Dirección de correo:</strong>
                  </p>
                  <a
                    href="https://outlook.live.com/mail/0/"
                    className="text-blue-500 break-all"
                    target="_blank"
                    rel="noopener noreferrer">
                    {user.email}
                  </a>
                  <p className="mt-2">
                    <strong>Ciudad:</strong>
                  </p>
                  <p>{user.student ? user.student.country.name : `Pais no encontrado`}</p>
                </div>

                <div className="flex flex-row justify-center gap-6 w-[90%] mt-6 border border-gray-200 p-3 mb-4 ml-3 rounded">
                  <GaugeProgress value={approvedHours} max={20} label="Aprobadas" />
                  <GaugeProgress value={totalHours} max={20} label="Total" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
