import React, { useEffect, useRef, useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PerfilDetails from "./PerfilDetails";
import axiosClient from "../../api/axiosClient";
import { useNavigate } from "react-router";

export default function ProfileContent() {
  const [editMode, setEditMode] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const profileRef = useRef(null);

  async function getData() {
    try {
      const res = await axiosClient.get("/auth/profile");
      setUser(res.data);
      console.log(res.data);
      setLoading(false);
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      } else {
        console.error("Error al obtener el perfil:", err);
      }
    }
  }

  useEffect(() => {
      getData();
      console.log(user);
    }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-white to-[#c0def3] py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="w-full md:w-[300px]">
            <ProfileSidebar
              editMode={editMode}
              setEditMode={setEditMode}
              viewProfile={viewProfile}
              setViewProfile={setViewProfile}
              loading={loading}
              user={user}
              profileRef={profileRef}
            />
          </div>

          <div className="flex-1 bg-white shadow-lg rounded-md h-auto border border-gray-200 mr-2">
            <PerfilDetails
              editMode={editMode}
              setEditMode={setEditMode}
              viewProfile={viewProfile}
              setViewProfile={setViewProfile}
              ref={profileRef}
              user={user}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
