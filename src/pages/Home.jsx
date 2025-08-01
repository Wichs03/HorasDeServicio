import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import { Avatar } from "flowbite-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import axiosClient from "../api/axiosClient";
import Galaxy from "../components/reactBits/Galaxy";
import Particles from "../components/reactBits/Galaxy";

export default function Home() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      <div className="w-full h-screen absolute z-0">
        <Particles
          particleColors={["#06385e", "#06385e"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <div className="mt-20 md:mt-0 w-full bg-gradient-to-b from-white to-[#c0def3] flex flex-col font-sans min-h-200 xl:min-h-screen">
        <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-8">
          <div className="w-full md:w-1/2">
            <div
              className="relative w-full bg-white bg-opacity-70 rounded-lg shadow-lg"
              style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/AyPbxgDT6Xk"
                title="Random video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
          <div className="w-full md:w-2/5 bg-white/30 backdrop-blur-md bg-opacity-70 border border-gray-200 rounded-lg p-6 shadow-lg z-100">
            <Card className="max-w-full border-none bg-transparent shadow-none z-50">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                ¡Bienvenido {loading ? `Cargando...` : `${user.f_name}`}!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                En FUNVAL creemos en el aprendizaje a través del servicio. Como parte de tu
                formación, contribuyes realizando horas de servicio que benefician a la comunidad y
                apoyan a la institución. Estas horas no solo son una forma de retribuir, sino que
                también representan un método significativo de pago por tu curso. A través de este
                modelo, adquieres experiencia práctica, desarrollas responsabilidad y ayudas a que
                la educación sea más accesible para todos.
              </p>

              <Link to="/service-hours" className="flex items-center">
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 cursor-pointer">
                  Registra tus Horas
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Link>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
