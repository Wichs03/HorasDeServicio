import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../api/axiosClient";
import { logout } from "../api/authService";

export default function Report() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  async function getData() {
    try {
      const res = await axiosClient.get("/categories");
      setCategories(res);
      console.log(res);
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      } else {
        console.error("Error al obtener las categorías:", err);
      }
    }
  }

  useEffect(() => {
    getData();
    console.log(categories);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-5 p-5">
        <h3 className="text-3xl font-bold text-slate-900 uppercase">
          Categorias
        </h3>
        {/* Categorias */}
        <div className="h-full w-[80%] grid grid-cols-1 place-content-center place-items-center gap-8 text-slate-700 md:grid-cols-2 lg:grid-cols-3">
          <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500">
            <img
              src="https://files.mormonsud.org/wp-content/uploads/2019/05/FAMILYSEARCH.jpg"
              alt=""
              className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Indexacion
              </h3>
              <p className="text-sm">Indexacion de nombre en family search</p>
              <div className="w-full flex items-center justify-between mt-5">
                <button className="bg-gray-400 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer">
                  Info.
                </button>
                <button className="bg-blue-500 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer">
                  Añadir Horas
                </button>
              </div>
            </div>
          </article>
          <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500">
            <img
              src="https://media.istockphoto.com/id/1355302969/photo/happy-african-american-employee-talking-on-video-conference-call.jpg?s=612x612&w=0&k=20&c=xgdW23NNI85wR64YjnX6Vm2yz8MrKETcOKXBsHQG3ZI="
              alt=""
              className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Instructor
              </h3>
              <p className="text-sm">Instructor de la clase</p>
              <div className="w-full flex items-center justify-between mt-5">
                <button className="bg-gray-400 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer">
                  Info.
                </button>
                <button className="bg-blue-500 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer">
                  Añadir Horas
                </button>
              </div>
            </div>
          </article>
          <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500">
            <img
              src="https://files.mormonsud.org/wp-content/uploads/2018/09/obispo-8.jpg"
              alt=""
              className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Liderazgo
              </h3>
              <p className="text-sm">
                Servir en el obispado o en la presidencia de la estaca
              </p>
              <div className="w-full flex items-center justify-between mt-5">
                <button className="bg-gray-400 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer">
                  Info.
                </button>
                <button className="bg-blue-500 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer">
                  Añadir Horas
                </button>
              </div>
            </div>
          </article>
          <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500">
            <img
              src="https://cms-b-assets.familysearch.org/dims4/default/508273c/2147483647/strip/true/crop/1500x1226+0+0/resize/612x500!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2Fa9%2F2b%2Fcd55e9834971bd1d7f79c7160595%2Fparticipa-titan-b1ee8a9803e0f028346d9adb34b3e4eaab1e9b33.jpg"
              alt=""
              className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Revision
              </h3>
              <p className="text-sm">Revision de registros en family search</p>
              <div className="w-full flex items-center justify-between mt-5">
                <button className="bg-gray-400 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer">
                  Info.
                </button>
                <button className="bg-blue-500 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer">
                  Añadir Horas
                </button>
              </div>
            </div>
          </article>
          <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500">
            <img
              src="https://i3.wp.com/media.zenfs.com/en/ktvx_articles_781/46589817aaf9b21ed519408352e981a0?ssl=1"
              alt=""
              className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                Asistencia al templo
              </h3>
              <p className="text-sm">
                Asistir al templo y llevar tus propias ordenanzas
              </p>
              <div className="w-full flex items-center justify-between mt-5">
                <button className="bg-gray-400 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer">
                  Info.
                </button>
                <button className="bg-blue-500 text-sm text-slate-100 hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer">
                  Añadir Horas
                </button>
              </div>
            </div>
          </article>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow"
        >
          Cerrar Sesión
        </button>
      </div>
    </>
  );
}
