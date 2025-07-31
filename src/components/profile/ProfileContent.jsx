import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function ProfileContent() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-300 py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-[300px]">
            <ProfileSidebar />
          </div>

          <div className="flex-1 bg-white shadow-lg rounded-md h-auto border border-gray-200 mr-2">
            <h2 className="text-xl font-semibold text-center text-gray-500 mt-10">
              INFO EDITAR PERFIL
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
