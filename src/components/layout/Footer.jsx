import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../api/authService";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-600 to-gray-300 text-white md:px-20 pt-10 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* REDES SOCIALES */}
        <div className="flex flex-col items-center md:justify-center md:items-start text-center md:text-left">
          <h3 className="text-2xl md:text-lg font-semibold mb-3">
            Contáctanos
          </h3>
          <div className="flex mb-4 gap-2">
            <a
              href="https://www.fundaciondevalores.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Contactanos/WebFunval.png"
                alt="WebFunval"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.estudiantefunval.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/favicon A 32.ico"
                alt="EstudianteFunval"
                className="w-10 h-10"
              />
            </a>
            <a
              href="mailto:itsupport@fundaciondevalores.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Contactanos/Email.png"
                alt="E-Mail"
                className="w-10 h-10"
              />
            </a>
          </div>
          <h3 className="text-2xl md:text-lg font-semibold mb-3">Síganos</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/fundet?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Social/Facebook.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UC3mlp-KW6mSDrsfsp8OOlIQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Social/Youtube.png"
                alt="Youtube"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.instagram.com/funvalinternacional?igshid=MzRlODBiNWFlZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Social/instagram.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* INFO */}
        <div className="text-center flex flex-col items-center justify-center mx-6 md:mx-0">
          <button className="bg-[#2899C4] px-4 py-2 rounded flex items-center justify-center gap-2 mb-4 border shadow-xl">
            <img
              src="/Soporte.png"
              alt="Soporte"
              className="w-8 h-8 lg:w-6 lg:h-6"
            />
            Contactar con el soporte del sitio
          </button>
          <p className="mb-1">
            Usted se ha identificado como <br />
            <strong>Edwin Dario Álzate López</strong>
          </p>
          <button
            onClick={logout}
            className="cursor-pointer border mt-2 px-3 py-2 bg-red-600 lg:bg-blue-700 lg:hover:bg-red-700 font-semibold text-white rounded-lg shadow transition-colors duration-300 transform hover:scale-105"
          >
            Cerrar Sesión
          </button>
        </div>

        {/* STORE */}
        <div className="text-center flex flex-col items-center justify-center lg:items-end mx-auto md:col-span-2 lg:col-span-1 mb-4">
          <h3 className="text-center lg:text-end text-xl font-semibold mb-4 mx-6 lg:mx-0">
            Descargar la app para dispositivos móviles
          </h3>
          <div className="space-y-3">
            <img
              src="/store/app-store.svg"
              alt="App Store"
              className="w-32 lg:w-24"
            />
            <img
              src="/store/play-store.svg"
              alt="Google Play"
              className="w-32 lg:w-24"
            />
            <img
              src="/store/windows-store.svg"
              alt="Windows Store"
              className="w-32 lg:w-24"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
