import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 via-gray-600 to-gray-300 text-white px-6 py-10 flex">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-2">
        {/* REDES SOCIALES */}
        <div>
          <h3 className="font-semibold mb-3">Contáctanos</h3>
          <div className="flex mb-5 gap-4">
            <a
              href="https://www.fundaciondevalores.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Contactanos/WebFunval.png"
                alt="WebFunval"
                className="w-9 h-9"
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
                className="w-9 h-9"
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
                className="w-9 h-9"
              />
            </a>
          </div>
          <h3 className="font-semibold mb-3">Síganos</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/fundet?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Social/Facebook.png"
                alt="Facebook"
                className="w-9 h-9"
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
                className="w-9 h-9"
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
                className="w-9 h-9"
              />
            </a>
          </div>
        </div>

        {/* INFO */}
        <div className="text-center">
          <button className="bg-[#2899C4] px-4 py-2 rounded flex items-center justify-center gap-2 mx-auto mb-4">
            <img src="/Soporte.png" alt="Soporte" className="w-6 h-6" />
            Contactar con el soporte del sitio
          </button>
          <p>
            Usted se ha identificado como{" "}
            <strong>Edwin Dario Alzate López</strong>
          </p>
          <p className="text-sm text-gray-300 mb-2">(Cerrar sesión)</p>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Resumen de retención de datos</li>
            <li>Descargar la app para dispositivos móviles</li>
            <li>Reiniciar tour para usuario en esta página</li>
          </ul>
        </div>

        {/* STORE */}
        <div className="text-right">
          <h3 className="font-semibold mb-3">
            Descargar la app para dispositivos móviles
          </h3>
          <div className="space-y-3">
            <img
              src="/store/app-store.svg"
              alt="Google Play"
              className="w-26 ml-auto"
            />
            <img
              src="/store/play-store.svg"
              alt="App Store"
              className="w-26 ml-auto"
            />
            <img
              src="/store/windows-store.svg"
              alt="App Store"
              className="w-26 ml-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
