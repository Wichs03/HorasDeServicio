import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Link to="/" className="text-2xl bg-blue-400">
        Landing Page
      </Link>
      <h1>Hola Mundo</h1>
    </>
  );
}
