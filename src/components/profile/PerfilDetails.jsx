import React, { forwardRef, useState } from "react";
import { ImCross } from "react-icons/im";
import DinoGamePortal from "./DinoGame";
import EditProfileForm from "./EditProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";

export default forwardRef(function PerfilDetails(
  { setEditMode, editMode, viewProfile, setViewProfile, user },
  ref
) {
  const [modalPassword, setModalPassword] = useState(false);

  function toggleModal() {
    setModalPassword(!modalPassword);
  }

  return (
    <>
      <div ref={ref} className="w-full h-full">
        {!viewProfile && !editMode && (
          <div className="w-full h-full">
            <DinoGamePortal user={user} />
          </div>
        )}
        {viewProfile && (
          <div className="w-full flex flex-col items-center justify-center p-4">
            <div className="w-full flex items-center justify-end">
              <ImCross
                onClick={() => {
                  setViewProfile(false);
                }}
                className="text-xl text-blue-950/60 cursor-pointer hover:scale-115 transition-transform duration-500"
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center text-blue-950">
              <h3 className="text-xl font-bold uppercase mt-6 mb-6 border-b-2 border-blue-300 pb-2">
                Información del Perfil
              </h3>

              <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
                {/* Columna Izquierda */}
                <div className="flex flex-col gap-4 bg-white shadow-md rounded-xl p-6 border border-gray-200">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-600">Nombre:</h4>
                    <p className="font-medium">
                      {user.f_name} {user.m_name || ""}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-600">Apellido:</h4>
                    <p className="font-medium">
                      {user.f_lastname} {user.s_lastname || ""}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-600">Email:</h4>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-600">Teléfono:</h4>
                    <p className="font-medium">{user.phone || "Sin Teléfono"}</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-600">País:</h4>
                    <p className="font-medium">{user.student?.country?.name || "Sin País"}</p>
                  </div>
                </div>

                {/* Columna Derecha */}
                <div className="flex flex-col gap-4 bg-white shadow-md rounded-xl p-6 border border-gray-200">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-600">Status:</h4>
                    <p className="font-medium capitalize">{user.status}</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-gray-600">Escuela:</h4>
                    <p className="font-medium">{user.schools[0]?.name || "Sin Escuela"}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-2">Recruiter:</h4>
                    {user.student?.recruiter ? (
                      <div className="text-sm text-gray-800 bg-blue-50 p-3 rounded-lg shadow-sm">
                        <p className="font-medium">{user.student.recruiter.full_name}</p>
                        <p>{user.student.recruiter.phone || "Sin Teléfono"}</p>
                        <p>{user.student.recruiter.email || "Sin Email"}</p>
                      </div>
                    ) : (
                      <p className="text-gray-500">Sin Recruiter</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {editMode && (
          <div className="w-full h-full flex flex-col items-center justify-between p-4">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-end">
                <ImCross
                  onClick={() => {
                    setEditMode(false);
                  }}
                  className="text-xl text-blue-950/60 cursor-pointer hover:scale-115 transition-transform duration-500"
                />
              </div>
              <EditProfileForm user={user}></EditProfileForm>
            </div>
            <div className="w-full items-start p-4">
              <button
                onClick={toggleModal}
                className="px-5 py-2 bg-blue-700/5 hover:bg-blue-800/15 border border-blue-700 rounded-md text-blue-900 font-bold cursor-pointer">
                Cambiar Contraseña
              </button>
              {modalPassword && <ChangePasswordForm toggleModal={toggleModal} />}
            </div>
          </div>
        )}
      </div>
    </>
  );
});
