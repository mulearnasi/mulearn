import React from "react";

const Events = () => {
  const events = [
    {
      month: "Sep",
      date: "16",
      head: "Inspiration Station Radio",
      para: "Inspiration Station Radio was an event by Mulearn ASIET to engage and inspire students through interactive radio sessions.",
      img: "/events/inspiring_radio.jpeg"
    },
    {
      month: "Sep",
      date: "02",
      head: "Onathallu",
      para: "The Onathallu Debate Competition on 2nd September 2025 was held to promote debating...",
      img: "/events/onnathall.jpeg"
    },
    {
      month: "Aug",
      date: "09",
      head: "Mu-Hunt",
      para: "The Mu-Hunt was a skill- and speed-based treasure hunt organized by μLearn at ASIET.",
      img: "/events/Mu_Hunt.jpeg"
    },
    {
      month: "Aug",
      date: "06",
      head: "AuthentiWrite",
      para: "AuthentiWrite was a plagiarism awareness workshop by Mulearn ASIET for final-year students.",
      img: "/events/authenti_write.jpeg"
    }
  ];

  const mainEvent = events[0];
  const subEvents = events.slice(1);

  return (
    <section id="events" className="flex flex-col justify-center gap-10 px-8 py-20 w-full bg-white font-sans max-[500px]:px-[15px]">
      <h2 className="text-center self-center text-[#ae59ff] text-[2.5rem] font-extrabold tracking-tight">
        Our Event Journey
      </h2>

      <div className="flex flex-row items-stretch justify-center gap-8 w-full max-w-7xl mx-auto max-[880px]:flex-col">
        
        {/* Large Main Event Card */}
        <div className="flex flex-col p-0 rounded-[2rem] bg-white border border-purple-50 shadow-[0_10px_40px_-15px_rgba(174,89,255,0.15)] overflow-hidden w-1/2 max-[880px]:w-full transition-transform hover:scale-[1.01] duration-300">
          <div className="relative w-full h-[300px]">
             <img 
              src={mainEvent.img} 
              alt={mainEvent.head} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex p-6 items-center">
            <div className="flex flex-col justify-center pr-5 border-r-4 border-[#ae59ff] text-[28px] uppercase font-black text-[#ae59ff] leading-none">
              <span>{mainEvent.month}</span>
              <span>{mainEvent.date}</span>
            </div>
            <div className="flex flex-col justify-center pl-5 font-body">
              <strong className="text-slate-900 text-xl leading-tight mb-2">
                {mainEvent.head}
              </strong>
              <span className="text-slate-600 text-[0.95rem] leading-relaxed">
                {mainEvent.para}
              </span>
            </div>
          </div>
        </div>

        {/* Sub Events List */}
        <div className="flex flex-col gap-4 flex-1">
          {subEvents.map((event, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 rounded-3xl bg-white border border-purple-50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(174,89,255,0.2)] transition-all duration-300 group"
            >
              <div className="flex items-center flex-1">
                <div className="flex flex-col justify-center pr-4 border-r-2 border-purple-100 text-[20px] uppercase font-bold text-slate-400 group-hover:text-[#ae59ff] group-hover:border-[#ae59ff] transition-colors">
                  <span className="text-[12px]">{event.month}</span>
                  <span className="text-2xl leading-none">{event.date}</span>
                </div>
                <div className="flex flex-col justify-center px-5 font-body">
                  <strong className="text-slate-800 text-lg group-hover:text-[#ae59ff] transition-colors max-[500px]:text-[1rem]">
                    {event.head}
                  </strong>
                  <span className="text-slate-500 text-[0.85rem] line-clamp-2 mt-1">
                    {event.para}
                  </span>
                </div>
              </div>
              <div className="w-[80px] h-[80px] rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={event.img} 
                  alt={event.head} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all"
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Events;