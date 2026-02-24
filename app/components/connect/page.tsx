import React from "react";
import Image from "next/image";
import { Discord, Whatsapp } from "./assets/svg"; 

const Connect = () => {
  const data = {
    collegeCode: "ASI",
    discordLink: "https://discord.gg/CFUWBKDW",
    whatsAppLink: "https://chat.whatsapp.com/Feijsfg9iwz2HdQYMraH5V?mode=ems_copy_t"
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center w-full gap-[25px] px-[10vw] pb-[10vh] pt-10 bg-white font-sans"
    >
      <h1 className="text-[#ae59ff] text-[35px] font-bold max-[379px]:text-[30px]">
        Connect With Us
      </h1>

      <div className="flex w-full bg-white border-2 border-[#ae59ff] rounded-[20px] h-[350px] overflow-hidden shadow-sm max-[1250px]:h-[300px] max-[950px]:h-[250px] max-[700px]:flex-col max-[700px]:h-auto max-[700px]:items-center">
        {/* Text and Social Buttons */}
        <div className="flex flex-col justify-between w-full p-[5%_6%] max-[700px]:items-center max-[700px]:text-center max-[700px]:p-8 max-[700px]:gap-6">
          <div>
            <h2 className="text-[32px] font-bold leading-tight text-slate-900 max-[1250px]:text-[28px] max-[950px]:text-[24px]">
              Join µLearn {data.collegeCode} Discord server!
            </h2>
            <p className="text-[20px] text-slate-500 mt-4 font-body max-[950px]:text-[16px] max-[700px]:text-[14px]">
              Do join our campus community discord server, so you don’t miss out any of the updates.
            </p>
          </div>

          <div className="flex items-center gap-4 max-[700px]:flex-wrap max-[700px]:justify-center">
            <a
              href={data.discordLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ae59ff] text-white font-bold transition-all hover:bg-[#9333ea] hover:shadow-lg active:scale-95 max-[820px]:text-[14px]"
            >
              <Discord />
              Join Discord
            </a>
            <a
              href={data.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#ae59ff] text-[#ae59ff] font-bold transition-all hover:bg-purple-50 active:scale-95 max-[820px]:text-[14px]"
            >
              <Whatsapp />
              Join Whatsapp
            </a>
          </div>
        </div>

        {/* Illustration Image */}
        <div className="h-full flex shrink-0 bg-purple-50/30 max-[700px]:w-full">
          <Image
            src="/assets/connect.svg" 
            alt="Connect Illustration"
            width={500}
            height={350}
            className="h-full w-auto object-contain max-[700px]:w-full max-[700px]:h-auto p-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Connect;