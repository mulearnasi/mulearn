import React from "react";
import Image from "next/image";
import Link from "next/link";

const ExploreLC = () => {
  return (
    <section
      className="flex w-full flex-wrap items-center justify-center px-[5vw] py-10 
                 bg-[url('/assets/explore.svg')] bg-center bg-cover bg-no-repeat
                 max-[670px]:pb-[5vh]"
    >
      {/* Left Side: Image Illustration */}
      <div className="w-1/2 min-w-[300px] max-[900px]:min-w-[250px] max-[670px]:w-[80%]">
        <Image
          src="/assets/explorelc.svg"
          alt="Explore Learning Circles Illustration"
          width={600}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Right Side: Content Box */}
      <div className="flex w-1/2 min-w-[400px] flex-col items-center gap-[4vh] text-center 
                      max-[900px]:min-w-[300px] max-[900px]:gap-[2vh] 
                      max-[670px]:w-full">
        <h1 className="font-sans text-[35px] font-bold text-[#ae59ff] max-[900px]:text-[28px]">
          Explore Learning Circles
        </h1>
        
        <p className="font-body text-[18px] text-slate-700 leading-relaxed 
                      max-[900px]:text-[1rem] max-[670px]:text-[0.8rem]">
          An informal mechanism for bringing together learners who are
          interested in the same topic from across different fields
          and disciplines. A fantastic way to spend a small amount of
          time learning about new things with a group of people with
          same interests!
        </p>

        <Link
          target="_blank"
          href="https://app.mulearn.org/learning-circle"
          className="rounded-lg bg-[#ae59ff] px-5 py-[10px] text-white transition-all 
                     hover:bg-[#9333ea] hover:scale-105 active:scale-95"
        >
          Create/Join Learning Circles
        </Link>
      </div>
    </section>
  );
};

export default ExploreLC;