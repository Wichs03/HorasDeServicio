import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://www.hs-service.api.crealape.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      }
    );

    if (res.ok) {
      alert("Sesión iniciada con éxito");
      onLogin();
      navigate("/servicios");
    } else {
      alert("Login fallido");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="absolute inset-0">
        <img
          src="/EstudiantesFunval.png"
          alt="fondo estudiantes"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* LOGIN */}
      <div className="relative z-10 bg-[#1c1c1e]/50 p-8 rounded-2xl shadow-xl w-[90%] max-w-md text-white border border-gray-700">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold flex justify-center items-center gap-[2px]">
            <span>FUNV</span>
            <img
              src="/favicon A 32.ico"
              alt="A"
              className="w-6 h-6 inline-block"
            />
            <span>L</span>
          </h1>
          <p className="text-gray-400">Plataforma de estudio virtual</p>
        </div>

        <form onSubmit={handleLogin}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm">Correo electrónico</span>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>

          <label className="block mb-6">
            <span className="block mb-1 text-sm">Contraseña</span>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </label>

          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="mt-4 text-sm text-center text-gray-400">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Crear cuenta
          </a>
        </div>
      </div>
    </div>
  );
}
