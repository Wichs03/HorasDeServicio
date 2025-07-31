import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../../api/axiosClient";
import InfoOfService from "./InfoOfService";
import { PiImageLight } from "react-icons/pi";
import FormForHours from "./FormForHours";

export default function Report() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [infoBtnMas, setInfoBtnMas] = useState(false);

  async function getData() {
    try {
      const res = await axiosClient.get("/categories");
      setCategories(res.data);
      console.log(res.data);
      setLoading(false);
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

  function toggleMasInfo() {
    setInfoBtnMas(!infoBtnMas);
  }

  return (
    <>
      <header className="w-full mb-10 transition-all duration-500 mt-16">
        <img src="../../../ServiceHours/landingServiceHours.png" alt="landingServiceHours" />
        <p className="absolute w-fit uppercase px-1 bg-cyan-600 text-[8px] text-white font-bold ml-5 mt-[-8px] md:text-lg z-20">
          Vinculacion Social
        </p>
        <div className="w-full flex flex-col items-center justify-center gap-4 pt-5 pb-4 px-2 bg-blue-800/80 text-white">
          <h3 className="text-3xl w-full text-center font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] md:text-5xl">
            Presentacion de Horas de Servicio
          </h3>
          <p className="w-[80%] text-center text-xs md:text-lg font-light">
            "Cuando os halláis al servicio de vuestros semejantes, solo estáis al servicio de
            vuestro Dios"(Mosiah 2:17)
          </p>
          {infoBtnMas ? (
            <button
              onClick={toggleMasInfo}
              className="px-3 py-1 bg-red-700/80 mt-2 rounded-md text-sm inset-shadow-sm inset-shadow-red-950 text-red-200 hover:scale-110 transition-transform duration-500 md:text-lg cursor-pointer">
              Menos info
            </button>
          ) : (
            <button
              onClick={toggleMasInfo}
              className="px-3 py-1 bg-indigo-500 mt-2 rounded-md text-sm inset-shadow-sm inset-shadow-indigo-900 text-indigo-200 hover:scale-110 transition-transform duration-500 md:text-lg cursor-pointer">
              Mas Info
            </button>
          )}
        </div>
        {infoBtnMas && <InfoOfService></InfoOfService>}
      </header>
      <FormForHours
      categories = {categories}
      ></FormForHours>
      <div className="w-full flex items-center justify-center">
        <h3 className="text-3xl font-bold text-blue-950 pb-5 uppercase md:text-5xl">
          Tipos de Servicios
        </h3>
      </div>
      {loading ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 p-5 text-slate-800">
          {/* Categorias */}
          <div className="h-full w-[80%] grid grid-cols-1 place-content-center place-items-center gap-8 text-slate-700 md:grid-cols-2 lg:grid-cols-3">
            <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500 animate-pulse">
              <div className="flex items-center justify-center w-full h-50">
                <PiImageLight className="text-8xl text-slate-400 animate-pulse" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-slate-800"></h3>
                <p className="text-sm"></p>
                <div className="w-full flex items-center justify-between mt-5">
                  <button className="bg-gray-400 text-sm text-transparent hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer animate-pulse">
                    Info.
                  </button>
                  <button className="bg-blue-400 text-sm text-transparent hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer animate-pulse">
                    Añadir Horas
                  </button>
                </div>
              </div>
            </article>
            <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500 animate-pulse">
              <div className="flex items-center justify-center w-full h-50">
                <PiImageLight className="text-8xl text-slate-400 animate-pulse" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-slate-800"></h3>
                <p className="text-sm"></p>
                <div className="w-full flex items-center justify-between mt-5">
                  <button className="bg-gray-400 text-sm text-transparent hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer animate-pulse">
                    Info.
                  </button>
                  <button className="bg-blue-400 text-sm text-transparent hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer animate-pulse">
                    Añadir Horas
                  </button>
                </div>
              </div>
            </article>
            <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500 animate-pulse">
              <div className="flex items-center justify-center w-full h-50">
                <PiImageLight className="text-8xl text-slate-400 animate-pulse" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-slate-800"></h3>
                <p className="text-sm"></p>
                <div className="w-full flex items-center justify-between mt-5">
                  <button className="bg-gray-400 text-sm text-transparent hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer animate-pulse">
                    Info.
                  </button>
                  <button className="bg-blue-400 text-sm text-transparent hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer animate-pulse">
                    Añadir Horas
                  </button>
                </div>
              </div>
            </article>
            <article className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500 animate-pulse">
              <div className="flex items-center justify-center w-full h-50">
                <PiImageLight className="text-8xl text-slate-400 animate-pulse" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-slate-800"></h3>
                <p className="text-sm"></p>
                <div className="w-full flex items-center justify-between mt-5">
                  <button className="bg-gray-400 text-sm text-transparent hover:scale-105 transition-transform duration-300 px-3 py-1 rounded inset-shadow-sm inset-shadow-gray-600 cursor-pointer animate-pulse">
                    Info.
                  </button>
                  <button className="bg-blue-400 text-sm text-transparent hover:scale-105 transition-transform duration-300 px-3 py-1 rounded shadow-md/20 cursor-pointer animate-pulse">
                    Añadir Horas
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-5 p-5 text-slate-800 mb-20">
          {/* Categorias */}
          <div className="h-full w-[80%] grid grid-cols-1 place-content-center place-items-center gap-8 text-slate-700 md:grid-cols-2 lg:grid-cols-3 lg:w-[60%]">
            {categories.map((category) => (
              <article
                key={category.id}
                className="w-full h-full flex flex-col justify-between bg-blue-50 rounded-md shadow-xl/10 hover:shadow-xl/20 hover:scale-105 transition-all duration-500">
                {category.id === 1 && (
                  <img
                    src="https://files.mormonsud.org/wp-content/uploads/2019/05/FAMILYSEARCH.jpg"
                    alt={category.name}
                    className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
                  />
                )}
                {category.id === 2 && (
                  <img
                    src="https://media.istockphoto.com/id/1355302969/photo/happy-african-american-employee-talking-on-video-conference-call.jpg?s=612x612&w=0&k=20&c=xgdW23NNI85wR64YjnX6Vm2yz8MrKETcOKXBsHQG3ZI="
                    alt={category.name}
                    className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
                  />
                )}
                {category.id === 3 && (
                  <img
                    src="https://files.mormonsud.org/wp-content/uploads/2018/09/obispo-8.jpg"
                    alt={category.name}
                    className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
                  />
                )}
                {category.id === 4 && (
                  <img
                    src="https://cms-b-assets.familysearch.org/dims4/default/508273c/2147483647/strip/true/crop/1500x1226+0+0/resize/612x500!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2Fa9%2F2b%2Fcd55e9834971bd1d7f79c7160595%2Fparticipa-titan-b1ee8a9803e0f028346d9adb34b3e4eaab1e9b33.jpg"
                    alt={category.name}
                    className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
                  />
                )}
                {category.id === 5 && (
                  <img
                    src="https://i3.wp.com/media.zenfs.com/en/ktvx_articles_781/46589817aaf9b21ed519408352e981a0?ssl=1"
                    alt={category.name}
                    className="mask-b-from-60% w-full bg-cover object-cover overflow-hidden max-h-[60%]"
                  />
                )}
                {category.id > 5 && (
                  <div className="flex items-center justify-center w-full h-50">
                    <PiImageLight className="text-8xl text-slate-400 animate-pulse" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">{category.name}</h3>
                  <p className="text-sm">{category.description}</p>
                  <div className="w-full flex items-center justify-between mt-5">
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
