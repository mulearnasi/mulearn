import React from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  // Directly using the row data from your provided JSON
  const galleryData = {
    row1: [
      { image: "/gallery/g1.jpeg" },
      { image: "/gallery/g2.jpeg" },
      { image: "/gallery/g3.jpeg" },
      { image: "/gallery/g4.jpeg" },
      { image: "/gallery/g5.jpeg" },
      { image: "/gallery/g6.jpeg" },
      { image: "/gallery/g7.jpeg" }
    ],
    row2: [
      { image: "/gallery/g8.jpeg" },
      { image: "/gallery/g9.jpeg" },
      { image: "/gallery/g10.jpeg" },
      { image: "/gallery/g11.jpeg" },
      { image: "/gallery/g12.jpeg" },
      { image: "/gallery/g13.jpeg" },
      { image: "/gallery/g14.jpeg" }
    ]
  };

  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: true,
    gradientColor: "white", // Matches your white theme
    gradientWidth: 50,
  };

  return (
    <section id="gallery" className="bg-white pb-12 overflow-hidden">
      {/* Heading */}
      <h2 className="text-[#ae59ff] text-[35px] font-bold text-center py-12 font-sans">
        Memories
      </h2>

      {/* Row 1: Left to Right */}
      <div className="relative mb-2">
        <Marquee {...marqParams} className="w-screen">
          {galleryData.row1.map((item, index) => (
            <div 
              key={`row1-${index}`}
              className="p-2 h-[325px] w-[450px] 
                         md:h-[250px] md:w-[350px] 
                         sm:h-[200px] sm:w-[300px] 
                         max-[400px]:h-[150px] max-[400px]:w-[250px]"
            >
              <img 
                src={item.image} 
                alt={`Gallery row 1 image ${index}`}
                loading="lazy" 
                className="h-full w-full object-cover rounded-[20px] shadow-sm border border-purple-50"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Row 2: Right to Left */}
      <div className="relative">
        <Marquee {...marqParams} direction="right" className="w-screen">
          {galleryData.row2.map((item, index) => (
            <div 
              key={`row2-${index}`}
              className="p-2 h-[325px] w-[450px] 
                         md:h-[250px] md:w-[350px] 
                         sm:h-[200px] sm:w-[300px] 
                         max-[400px]:h-[150px] max-[400px]:w-[250px]"
            >
              <img 
                src={item.image} 
                alt={`Gallery row 2 image ${index}`}
                loading="lazy" 
                className="h-full w-full object-cover rounded-[20px] shadow-sm border border-purple-50"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Gallery;