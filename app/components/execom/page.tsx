'use client';

import React, { useState, useEffect, useCallback, use } from "react";

// Types for our team data
interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  category: string;
}

const Execom = () => {
  // Direct Data Integration
  const teamMembers: Member[] = [
    { id: "1", name: "Sharika T R", role: "Staff Advisor", image: "/execom/sharika.jpeg", category: "Core Team" },
    { id: "2", name: "Snehamol K M", role: "Campus Lead", image: "/execom/Snehamol k m.jpg", category: "Core Team" },
    { id: "3", name: "Mathew Joseph T A", role: "Campus Co-Lead", image: "/execom/Mathew Joseph T A.png", category: "Core Team" },
    { id: "4", name: "Amala B", role: "Creative Lead", image: "/execom/Amala B.jpg", category: "Creative Team" },
    { id: "5", name: "Amal Anish", role: "Creative Designer", image: "/execom/Amal Anish (2).jpg", category: "Creative Team" },
    { id: "6", name: "Ameesh Mohammed", role: "Design Lead", image: "/execom/Snehamol k m.jpg", category: "Design Team" },
    { id: "7", name: "Angel Devis", role: "UI/UX Designer", image: "/execom/Angel Devis.jpg", category: "Design Team" },
    { id: "8", name: "Saniya Manoj", role: "Media Lead", image: "/execom/saniya_manoj.jpeg", category: "Media Team" },
    { id: "9", name: "Annpriya Biju", role: "Social Media Manager", image: "/execom/Annpriya.jpg", category: "Media Team" },
    { id: "10", name: "Athul Ashok", role: "Content Strategist", image: "/execom/Athul Asok.jpg", category: "Media Team" },
    { id: "11", name: "Parvathy U", role: "Technical Lead", image: "/execom/Parvathy_.jpg", category: "Technical Team" },
    { id: "12", name: "Sanjay S", role: "Full Stack Developer", image: "/execom/SanjayS.jpg", category: "Technical Team" },
    { id: "13", name: "Harijith Asokan", role: "Communication Lead", image: "/execom/Harijith Asokan.jpg", category: "Communication Team" },
    { id: "14", name: "Afiya Fathima", role: "PR Manager", image: "/execom/Afiya Fathima.jpg", category: "Communication Team" },
    { id: "15", name: "Revathy V Nair", role: "Event Coordinator", image: "/execom/Revathy V Nair_.jpg", category: "Communication Team" },
    { id: "16", name: "Sreelekshmi Wilson", role: "Outreach Manager", image: "/execom/Sreelekshmi Wilson.jpg", category: "Communication Team" },
  ];

  const categories = [...new Set(teamMembers.map((m) => m.category))];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = categories.length;
  const currentCategory = categories[currentIndex];
  const currentMembers = teamMembers.filter((m) => m.category === currentCategory);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 700);
  }, [totalSlides, isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 700);
  }, [totalSlides, isAnimating]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="team" className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f3e8ff] via-[#ddd6fe] to-[#f3e8ff] font-sans py-16 md:py-0">
      
      {/* Decorative Floating Circles & Glows */}
      <div className="absolute top-[5vh] left-[5vw] w-2 h-2 bg-purple-500/50 rounded-full animate-float" />
      <div className="absolute top-[10vh] right-[8vw] w-3 h-3 bg-violet-500/60 rounded-full animate-float [animation-delay:0.3s]" />
      <div className="absolute bottom-[10%] left-[15%] w-[30vw] h-[30vw] bg-radial-purple opacity-30 blur-[60px] animate-pulse" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">Meet Our Team</h2>
              <div className="h-2 w-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mt-4 mx-auto lg:mx-0" />
            </div>

            <div className="h-24 md:h-32 flex items-center overflow-hidden">
              <h3 key={currentCategory} className={`text-4xl md:text-6xl font-black bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent transition-all duration-700 ${direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
                {currentCategory}
              </h3>
            </div>

            <p className="text-slate-600 text-lg md:text-xl font-body leading-relaxed max-w-md">
              Talented individuals working together to create exceptional experiences and drive innovation forward.
            </p>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 mt-4">
              <NavButton onClick={prevSlide} direction="prev" disabled={isAnimating} />
              <NavButton onClick={nextSlide} direction="next" disabled={isAnimating} />
              <div className="flex gap-2 ml-4">
                {categories.map((_, i) => (
                  <button key={i} onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }} className={`h-2 transition-all duration-300 ${currentIndex === i ? 'w-8 bg-violet-600 rounded-full' : 'w-2 bg-violet-300 rounded-full'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Cards */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div key={currentIndex} className={`grid gap-6 transition-all duration-700 ${direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'} ${currentMembers.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2'}`}>
              {currentMembers.map((member, idx) => (
                <div key={member.id} className="group relative w-full aspect-[3/4] max-w-[220px] rounded-3xl overflow-hidden shadow-xl border-2 border-white/40 bg-white/30 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-violet-400">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-4 w-full">
                    <h4 className="text-white font-bold text-lg leading-tight">{member.name}</h4>
                    <p className="text-purple-200 text-xs uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex flex-col items-center gap-6 mt-12">
               <div className="flex items-center gap-4">
                 <NavButton onClick={prevSlide} direction="prev" disabled={isAnimating} />
                 <NavButton onClick={nextSlide} direction="next" disabled={isAnimating} />
               </div>
               <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="px-6 py-2 bg-white/60 backdrop-blur-sm border border-purple-200 rounded-full text-violet-700 font-medium text-sm hover:bg-violet-600 hover:text-white transition-all">
                {isAutoPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .bg-radial-purple { background: radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%); }
        .animate-slide-in-right { animation: slideInRight 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </section>
  );
};

// Helper Component for Nav Buttons
const NavButton = ({ onClick, direction, disabled }: { onClick: () => void; direction: 'next' | 'prev'; disabled: boolean }) => (
  <button onClick={onClick} disabled={disabled} className="w-12 h-12 rounded-full border-2 border-violet-200 bg-white/60 backdrop-blur-sm text-violet-600 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-all disabled:opacity-50">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {direction === 'prev' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
  </button>
);

export default Execom;