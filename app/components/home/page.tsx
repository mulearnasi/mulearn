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
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    style={{ transform: `rotate(${rotate})` }}
    viewBox="0 0 114 132"
    fill="none"
  >
    <path
      d="M103.771 58.4594C107.337 57.5204 110.99 59.6505 111.929 63.2169L112.824 66.6179C114.257 72.0627 111.006 77.6386 105.561 79.0721L104.657 79.3102C95.6877 81.6715 88.3356 80.7031 82.6004 76.4047C78.8103 84.8372 71.0555 90.5962 59.336 93.6817C51.7469 95.6797 44.6471 103.46 46.6451 111.049L48.1254 116.671C49.8077 123.061 45.9915 129.605 39.6015 131.288C33.2116 132.97 26.6677 129.154 24.9853 122.764L1.04615 31.8366C-0.63619 25.4467 3.18008 18.9028 9.57004 17.2205C15.96 15.5381 22.5039 19.3544 24.1862 25.7443L33.5817 61.4307C35.0118 66.8624 37.7273 70.6198 41.7284 72.7029C45.7295 74.786 50.4208 75.1191 55.8022 73.7023C61.7815 72.128 66.1217 69.1848 68.8226 64.8726C71.5236 60.5603 71.9874 55.0365 70.2141 48.3011L61.6767 15.8739C59.9944 9.48392 63.8107 2.94002 70.2006 1.25768C76.5906 -0.424661 83.1345 3.39161 84.8168 9.78157L96.6577 54.7562C97.5729 58.2325 99.9439 59.4669 103.771 58.4594Z"
      fill="white"
      fillOpacity="0.2"
    />
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