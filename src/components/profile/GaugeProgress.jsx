import React from "react";

export default function GaugeProgress({ value, max, label }) {
  const percentage = (value / max) * 100;

  return (
    <div className="flex flex-col items-center w-32 md:w-40">
      <div className="relative w-full aspect-square">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <path
            className="text-gray-200"
            stroke="currentColor"
            strokeWidth="3.8"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-blue-500"
            stroke="currentColor"
            strokeWidth="3.8"
            fill="none"
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm md:text-lg font-bold text-gray-600">
            {value}/{max}
          </span>
        </div>
      </div>
      <span className="mt-2 text-center text-xs md:text-sm font-semibold text-gray-500">
        {label}
      </span>
    </div>
  );
}
