import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import FadeContent from "./FadeContent";

export default function BtnToLogIn() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBtn(true);
    }, 2000);
  }, []);

  return (
    <>
      {showBtn && (
        <div className="absolute bottom-10 w-full flex items-center justify-center">
          <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div
              to="/home"
              className="text-xl md:text-2xl font-bold text-sky-200 border border-sky-700 rounded-lg px-5 py-1 md:px-8 md:py-2 bg-gradient-to-r from-sky-500/20 to-indigo-400/20 z-50">
              Log In
            </div>
          </FadeContent>
        </div>
      )}
    </>
  );
}
