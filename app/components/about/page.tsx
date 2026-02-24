import React from "react";

const About = () => {
  const aboutText = "The µLearn ASIET Student Chapter is a vibrant community at Adi Shankara Institute of Engineering and Technology that fosters collaborative learning, skill development, and innovation. As part of the global µLearn network, we empower students to upskill through workshops, hands-on projects, competitions, and industry interactions. Our chapter encourages peer learning, creativity, and real-world application of knowledge, while also promoting community engagement and digital literacy among students.";

  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center text-center 
                 gap-[25px] px-[6%] py-[8vh] 
                 max-[670px]:gap-[20px] max-[670px]:py-[5vh]
                 bg-white" // Clean white background to contrast the hero gradient
    >
      {/* Heading with a more vibrant, modern purple */}
      <h1 className="text-[40px] font-extrabold tracking-tight text-[#9333ea] max-[670px]:text-[2.5rem]">
        About Us
      </h1>
      
      {/* Paragraph with improved color (Slate-700) and better readability */}
      <p className="max-w-4xl text-left text-[1.25rem] text-slate-700 font-medium leading-relaxed
                    max-[900px]:text-[18px] 
                    max-[670px]:text-[1rem] max-[670px]:leading-normal">
        {aboutText}
      </p>
    </section>
  );
};

export default About;