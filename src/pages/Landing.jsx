import React from "react";
import SplitText from "../components/Landing/SplitText";
import ClickSpark from "../components/Landing/ClickSpark";
import BtnToLogIn from "../components/Landing/BtnToLogIn";
import { Link } from "react-router";

export default function Landing() {
  return (
    <>
      <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={25} sparkCount={8} duration={500}>
        <div className="relative w-screen h-screen overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-10]"
            src="../public/Space.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute top-0 left-0 w-full h-full z-20"></div>
          <div className="relative z-20 flex items-center justify-center h-full text-white px-4">
            <SplitText
              text="FUNVAL"
              className="text-5xl md:text-8xl font-bold text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              delay={400}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              charClassName={(char) => (char === "A" ? "text-blue-400 drop-shadow-[0_0_10px_rgba(0,0,255,0.3)]" : "")}
            />
          </div>
          <BtnToLogIn></BtnToLogIn>
          <div className="w-full flex items-center justify-center">
            <Link to="/home" className="absolute bottom-10 w-25 h-10 md:w-34 md:h-12 z-50"></Link>
          </div>
        </div>
      </ClickSpark>
    </>
  );
}
