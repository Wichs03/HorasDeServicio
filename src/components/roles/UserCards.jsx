import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function UserCards({ users }) {
  if (users.length === 0) return <p>No hay usuarios en este rol.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[75vw] mt-10">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white p-6 rounded-xl inset-shadow-sm inset-shadow-gray-400  border-none flex flex-row justify-between"
        >
          <IoPersonCircleOutline className="text-[100px] text-blue-950/80" />
          <div className="w-[50%]">
            <h3 className="text-xl font-bold text-[#06385e] mb-2">
              {user.full_name}
            </h3>
            <p className="text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-gray-700">
              <strong>Teléfono:</strong> {user.phone}
            </p>
            <p className="text-gray-700">
              <strong>Estado:</strong> {user.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
