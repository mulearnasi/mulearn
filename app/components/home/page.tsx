'use client';    
import React, { use } from "react";
import Image from "next/image";

// --- SVG COMPONENTS ---

const BlueStar = ({ size }: { size: string }) => (
  <svg width={size} height={size} viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.5 0L39.0556 31.9444L71 35.5L39.0556 39.0556L35.5 71L31.9444 39.0556L0 35.5L31.9444 31.9444L35.5 0Z" fill="#AE59FF" />
  </svg>
);

const WhiteStar = ({ size }: { size: string }) => (
  <svg width={size} height={size} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.5 0L28.0556 22.9444L51 25.5L28.0556 28.0556L25.5 51L22.9444 28.0556L0 25.5L22.9444 22.9444L25.5 0Z" fill="white" />
  </svg>
);

const Mu = ({ size, rotate }: { size: string; rotate: string }) => (
  <svg 
    width={size} 
    height={size} 
    style={{ transform: `rotate(${rotate})` }} 
    viewBox="0 0 445 445" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M222.13 0C99.4502 0 0 99.4502 0 222.13C0 344.811 99.4502 444.261 222.13 444.261C344.811 444.261 444.261 344.811 444.261 222.13C444.261 99.4502 344.811 0 222.13 0ZM321.056 295.127H285.875L285.398 294.65C268.326 277.531 254.912 260.655 245.158 243.974V295.127H208.761V149.134H245.158V206.516C259.921 187.391 278.412 173.045 300.679 163.529L321.056 182.176C306.945 190.134 294.945 201.218 285.053 215.378L284.529 216.143V217.147C284.529 217.147 284.529 217.147 284.529 217.195C284.529 240.211 296.685 266.183 321.056 295.127ZM160.038 295.127H123.642V149.134H160.038V295.127Z" fill="white" fillOpacity="0.2" />
  </svg>
);

// --- COMPONENT DATA ---

const data = {
  college: "Adishankara Institute of Engineering And Technology",
};

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex max-h-screen w-full flex-col items-center justify-between gap-[3vh] overflow-hidden bg-gradient-to-b from-[#c18bf5] to-white"
    >
      {/* Content Wrapper */}
      <div className="relative z-[9900] mt-[20vh] flex flex-col items-center md:mt-[16vh] lg:mt-[20vh]">
        <h1 className="m-0 text-[9.5vw] font-semibold leading-none md:text-[9vw] lg:text-[7vw]">
          Welcome to the
        </h1>
        <h2 className="m-0 -mt-[4vw] text-[17vw] font-bold leading-none text-[#ae59ff] lg:-mt-[3vw] lg:text-[9vw]">
          µverse
        </h2>
        <p className="mt-2 w-[43vw] text-center text-[3vw] md:text-[2.4vw] lg:mt-0 lg:w-[25vw] lg:text-[1.5vw]">
          {data.college}
        </p>
      </div>

      {/* Hero Image - Place your homeimg.svg in /public/assets/ */}
      <div className="w-full flex justify-center">
        <Image 
          src="assets/homeimg.svg" 
          alt="Home Illustration" 
          width={1920} 
          height={1080}
          className="w-full max-w-[900px] md:max-w-none"
          priority
        />
      </div>

      {/* --- DECORATIVE ELEMENTS (Absolute Positioned) --- */}

      {/* Blue Stars */}
      <div className="absolute left-[13%] top-[30%] z-[7000] md:left-[17%] lg:left-[15%] lg:top-[25%]">
        <BlueStar size="50px" />
      </div>
      <div className="absolute right-[10%] top-[35%] z-[7000] md:top-[30%] lg:top-[30%]">
        <BlueStar size="70px" />
      </div>

      {/* White Stars */}
      <div className="absolute left-[27%] top-[15%] z-[7000] md:top-[12%] lg:top-[12%]">
        <WhiteStar size="40px" />
      </div>
      <div className="absolute right-[14%] top-[30%] z-[7000] md:right-[18%] md:top-[26%] lg:right-[27%] lg:top-[28%]">
        <WhiteStar size="40px" />
      </div>

      {/* Mu Logos */}
      <div className="absolute right-[48.5%] top-[15%] z-0 md:right-[48%] md:top-[13%] lg:right-[45%] lg:top-[8%]">
        <Mu size="23vw" rotate="30deg" />
      </div>
      <div className="absolute -left-[4%] top-[40%] z-0 lg:-left-[5%] lg:top-[30%]">
        <Mu size="15vw" rotate="30deg" />
      </div>
      <div className="absolute -right-[5%] top-[30%] z-0">
        <Mu size="15vw" rotate="-10deg" />
      </div>
      <div className="absolute right-[7%] top-[17%] z-0 lg:right-[14%] lg:top-[15%]">
        <Mu size="7vw" rotate="-10deg" />
      </div>
    </div>
  );
};

export default Home;