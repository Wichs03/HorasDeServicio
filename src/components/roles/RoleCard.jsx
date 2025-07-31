import React from "react";

export default function RoleCard({ role, onClick }) {
  const videoMap = {
    Admin: "/UserRoles-mp4/Admin.mp4",
    Controller: "/UserRoles-mp4/Controller.mp4",
    Recruiter: "/UserRoles-mp4/Recruiter.mp4",
    Student: "/UserRoles-mp4/Student.mp4",
  };

  return (
    <div
      className="p-2 bg-[#4595e0]  rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      onClick={() => onClick(role.id)}
    >
      <video
        className="w-full h-52 object-cover cursor-pointer"
        src={videoMap[role.name] || "/UserRoles-mp4/default.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-center text-[#032844]">
          {role.name}
        </h3>
      </div>
    </div>
  );
}
