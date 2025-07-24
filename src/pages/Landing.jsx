import React from 'react'
import SplitText from '../components/SplitText'
import ClickSpark from '../components/ClickSpark'
import { Link } from 'react-router'

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
              text="FUNV"
              className="text-8xl font-bold text-center"
              delay={400}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text="A"
              className="text-8xl font-bold text-center text-blue-500"
              delay={400}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text="L"
              className="text-8xl font-bold text-center"
              delay={400}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <Link to="/home" className="w-30 h-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 drop-shadow-[0_0_10px_indigo] rounded">Hola</Link>
          </div>
        </div>
      </ClickSpark>
    </>
  )
}
