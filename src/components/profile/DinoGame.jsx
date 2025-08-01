import { useEffect, useState } from "react";
import DinoGame from "react-chrome-dino";
import { LuGamepad2 } from "react-icons/lu";
import SnakeGame from "./games/SnakeGame";
import TicTacToe from "./games/TicTacToe";
import { VscSnake } from "react-icons/vsc";
import { TbTicTac } from "react-icons/tb";

export default function DinoGamePortal({ user }) {
  const [game, setGame] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-2 pb-10 pt-10">
      <div className="w-full flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold text-blue-950 mb-5">Perfil de {user.f_name}</h3>
        <div className="flex items-center justify-center gap-5">
          <LuGamepad2
            onClick={() => {
              setGame(1);
            }}
            className="text-5xl text-blue-950 cursor-pointer hover:scale-115 transition-transform duration-300"
          />
          <VscSnake
            onClick={() => {
              setGame(2);
            }}
            className="text-5xl text-blue-950 cursor-pointer hover:scale-115 transition-transform duration-300"
          />
          <TbTicTac
            onClick={() => {
              setGame(3);
            }}
            className="text-5xl text-blue-950 cursor-pointer hover:scale-115 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="w-full">
        {game === 1 && <DinoGame />}
        {game === 2 && (<SnakeGame></SnakeGame>)}
        {game === 3 && (<TicTacToe />)}
      </div>
    </div>
  );
}
