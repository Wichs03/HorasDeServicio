import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import { Avatar } from 'flowbite-react';

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-blue-50 flex flex-col font-sans">
        <header className="flex justify-between items-center px-6 py-4 bg-blue-200 shadow-md">
          <div className="text-2xl font-bold text-blue-900">FUNVAL</div>
          <Avatar
          className="w-10 h-10 rounded-full bg-gray-600 border-2 border-gray-600 shadow-md flex items-center justify-center"
          placeholderInitials=""
          />
        </header>
        <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-8">
          <div className="w-full md:w-1/2">
            <div className="relative w-full bg-white bg-opacity-70 rounded-lg p-4 shadow-lg" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                src="https://www.youtube.com/embed/AyPbxgDT6Xk"
                title="Random video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-2/5 bg-white bg-opacity-70 rounded-lg p-6 shadow-lg">
            <Card className="max-w-full border-none bg-transparent shadow-none">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Welcome ALEX
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                  En FUNVAL creemos en el aprendizaje a través del servicio. Como parte de tu formación, contribuyes realizando horas de servicio que benefician a la comunidad y apoyan a la institución. Estas horas no solo son una forma de retribuir, sino que también representan un método significativo de pago por tu curso. A través de este modelo, adquieres experiencia práctica, desarrollas responsabilidad y ayudas a que la educación sea más accesible para todos.
              </p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-300">
                <Link to="/details" className="flex items-center">
                  Record your hours
                  <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </Button>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}