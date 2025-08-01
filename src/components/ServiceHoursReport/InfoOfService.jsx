import React from "react";

export default function InfoOfService() {
  return (
    <div className="w-full flex items-center justify-center">
    <div className="w-full lg:w-[78%] flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between md:pl-3">
        <div className="w-[60%] flex flex-col items-center justify-center gap-4 text-center lg:w-[80%]">
          <h3 className="font-bold text-xs md:text-2xl">¿Por que reportamos horas de servicio en funval?</h3>
          <p className="text-[7px] px-2 md:text-sm">
            FUNVAL desea bendecir el mayor numero de vidas posibles, es por ello que pedimos a todos
            los beneficiarios de las becas de FUNVAL que de manera simbólica paguen SU beca
            prestando servicio significativo al prójimo.
          </p>
        </div>
        <img src="../../../ServiceHours/Servicio1.png" alt="Servicio1" className="w-[40%] lg:w-[20%]" />
      </div>
      <div className="w-full flex flex-col items-center justify-center bg-blue-800/70 p-2 md:py-4">
        <h3 className="w-[95%] text-sm text-center text-white font-bold pb-2 md:text-xl">
          El presidente Spencer W. Kimball explicó:
        </h3>
        <h3 className="w-[80%] text-xs text-center text-white md:text-lg">
          "Dios nos tiene en cuenta y vela por nosotros; pero por lo general, es por medio de otra
          persona que atiende a nuestras necesidades"
        </h3>
      </div>
      <div className="w-full flex items-center">
        <img src="../../../ServiceHours/Servicio2.png" alt="Servicio2" className="w-[50%] md:w-[40%] lg:w-[20%]" />
        <h3 className="w-[50%] h-full font-bold p-3 text-sm uppercase text-center pr-5 md:text-2xl md:w-[60%] lg:w-[80%] lg:text-3xl">
          Recomendaciones al reportar tus horas de servicio
        </h3>
      </div>
      <div className="flex flex-col p-5 text-sm gap-3 bg-blue-800/60 text-white md:text-xl">
        <p className="drop-shadow-xl/20">
          1. Las horas de servicio son la forma de pagar la beca que se te ha brindando, sino
          reportar tus horas cada mes no podrás disfrutar de los beneficios de la beca.
        </p>
        <p className="drop-shadow-xl/20">
          2. Asegúrate de subir fotos de antes, durante y después del servicio en un archivo PDF o
          Word, debes tener espacio disponible en tu correo electrónico para poder enviarlas (si no
          apareces en ninguna de las fotos no será aceptado tu servicio). Esperamos que las fotos
          que subas reflejen un impacto significativo en las personas.
        </p>
        <p className="drop-shadow-xl/20">
          3. Asegúrate de no combinar los servicios que vas a reportar es decir llena el formulario
          por cada tipo de servicio que hagas.{" "}
        </p>
        <p className="drop-shadow-xl/20">
          4. Las horas de servicio no son acumulativas, así que asegúrate de solo reportar las horas
          requeridas para el nivel/modulo que estas cursando.
        </p>
      </div>
    </div>
    </div>
  );
}
