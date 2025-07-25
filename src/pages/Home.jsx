import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-blue-50 flex flex-col font-sans">
      <header className="flex justify-between items-center px-6 py-4 bg-blue-200 shadow-md">
        <div className="text-2xl font-bold text-blue-900">FUNVAL</div>
        <div className="w-10 h-10 bg-blue-500 rounded-full border border-blue-800 shadow-md" />
      </header>
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-8">
        <div className="w-full md:w-1/2">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/AyPbxgDT6Xk"
              title="Random video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full md:w-2/5 text-center md:text-left flex flex-col">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome ALEX</h1>
        <p className="text-blue-900 text-lg mb-6 leading-relaxed font-medium">
          En FUNVAL creemos en el aprendizaje a través del servicio. Como parte de tu formación, contribuyes realizando horas de servicio que benefician a la comunidad y apoyan a la institución. Estas horas no solo son una forma de retribuir, sino que también representan un método significativo de pago por tu curso. A través de este modelo, adquieres experiencia práctica, desarrollas responsabilidad y ayudas a que la educación sea más accesible para todos.
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
            Record your hours
          </button>
        </div>
        </div>
      </main>
    </div>
    </>
  );
}
