import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import RoleCard from "./RoleCard";

export default function RolesContent() {
  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Recruiter" },
    { id: 3, name: "Controller" },
    { id: 4, name: "Student" },
  ];

  const handleSelectRole = (roleId) => {
    console.log("Rol seleccionado:", roleId);
  };

  return (
    <div>
      <Navbar />
      <div className="mt-17 bg-gradient-to-b from-white to-[#c0def3]">
        <main className="p-6 flex flex-col items-center">
          <h1 className="text-center text-5xl font-bold text-[#06385e]  mb-10">
            USER ROLES
          </h1>

          <div className="bg-[#06385e] rounded-2xl shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8 border-4 border-gray-200 p-6">
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} onClick={handleSelectRole} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
