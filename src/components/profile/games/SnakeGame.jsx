import React, { useState, useEffect, useRef } from "react";

const BOARD_SIZE = 15; // 15x15 grid
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const MOVE_INTERVAL = 150;

function getRandomFoodPosition(snake) {
  let newPos;
  do {
    newPos = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  } while (snake.some((segment) => segment.x === newPos.x && segment.y === newPos.y));
  return newPos;
}

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(getRandomFoodPosition(INITIAL_SNAKE));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const moveIntervalRef = useRef(null);

  // Control keyboard arrows and prevent scroll
  useEffect(() => {
    function handleKeyDown(e) {
      const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
      if (keys.includes(e.key)) {
        e.preventDefault(); // Evita scroll al usar flechas
        switch (e.key) {
          case "ArrowUp":
            if (direction.y === 1) break;
            setDirection({ x: 0, y: -1 });
            break;
          case "ArrowDown":
            if (direction.y === -1) break;
            setDirection({ x: 0, y: 1 });
            break;
          case "ArrowLeft":
            if (direction.x === 1) break;
            setDirection({ x: -1, y: 0 });
            break;
          case "ArrowRight":
            if (direction.x === -1) break;
            setDirection({ x: 1, y: 0 });
            break;
          default:
            break;
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  // Game loop move snake
  useEffect(() => {
    if (gameOver) return;
    moveIntervalRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        // Check wall collisions
        if (
          newHead.x < 0 ||
          newHead.x >= BOARD_SIZE ||
          newHead.y < 0 ||
          newHead.y >= BOARD_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        let newSnake = [newHead, ...prevSnake];

        // Check if eating food
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 1);
          setFood(getRandomFoodPosition(newSnake));
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, MOVE_INTERVAL);

    return () => clearInterval(moveIntervalRef.current);
  }, [direction, food, gameOver]);

  // Restart game
  const restart = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(getRandomFoodPosition(INITIAL_SNAKE));
    setScore(0);
    setGameOver(false);
  };

  return (
    <div
      className="w-[60%] max-w-4xl mx-auto bg-gray-100 rounded-lg p-4 select-none"
      tabIndex={0}
    >
      <h3 className="text-center text-2xl font-bold mb-4 text-blue-900">Snake Game</h3>
      <div className="md:flex md:items-center md:justify-center md:gap-8">
        <div
          className="relative border-4 border-blue-900 bg-white grid grid-cols-15 grid-rows-15 w-full max-w-md aspect-square"
          style={{ maxHeight: 400 }}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, i) => {
            const x = i % BOARD_SIZE;
            const y = Math.floor(i / BOARD_SIZE);
            const isSnake = snake.some((seg) => seg.x === x && seg.y === y);
            const isFood = food.x === x && food.y === y;
            return (
              <div
                key={i}
                className={`border border-gray-300 ${
                  isSnake ? "bg-blue-900" : isFood ? "bg-red-600" : "bg-white"
                }`}
                style={{ width: "100%", height: "100%" }}
              />
            );
          })}
        </div>
        <div className="mt-4 md:mt-0 flex flex-col items-center md:items-start text-blue-900 font-semibold text-lg min-w-[100px]">
          <div>Score: {score}</div>
          {gameOver && (
            <button
              onClick={restart}
              className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Restart
            </button>
          )}
          {!gameOver && (
            <p className="mt-4 text-center md:text-left text-gray-700 text-sm max-w-xs">
              Usa las flechas del teclado para mover la serpiente. Come los cuadros rojos para sumar puntos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
