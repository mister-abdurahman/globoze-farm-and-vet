import React from "react";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const images = [
  { id: 1, src: gallery1, alt: "Gallery image 1", caption: "Vicious Dog" },
  { id: 2, src: gallery2, alt: "Gallery image 2", caption: "Fluffy Cat" },
  { id: 3, src: gallery3, alt: "Gallery image 3", caption: "Gentle Bunny" },
  { id: 4, src: gallery4, alt: "Gallery image 4", caption: "Curious Cattle" },
  { id: 5, src: gallery5, alt: "Gallery image 5", caption: "Charming Turkey" },
  { id: 6, src: gallery6, alt: "Gallery image 6", caption: "Healthy Sheep" },
];

// const Gallery: React.FC = () => {
//   return (
//     <section className="py-16 bg-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center mb-10">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
//             Our Gallery
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             We care for every animal - from playful puppies to gentle cats and
//             even exotic friends, each of them holds a special place in our
//             hearts.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
//           {images.map((src, idx) => (
//             <div
//               key={idx}
//               className="overflow-hidden rounded-lg shadow-lg bg-white/5 transform transition-all duration-300 hover:scale-105"
//             >
//               <img
//                 src={src}
//                 alt={`Gallery image ${idx + 1}`}
//                 className={`w-full h-56 object-cover object-center sm:h-48 lg:h-56`}
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
import { useState, useEffect } from "react";
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Autoplay Effect (Runs on component mount)
  useEffect(() => {
    const interval = setInterval(nextSlide, 4500); // Change image every 4.5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []); // Re-run effect whenever the current index changes
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-extrabold text-red-900 mb-2">
        Our Happy Patients
      </h2>
      <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        A glimpse into the loving care and professional environment we provide
        to every animal.
      </p>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto h-[500px] md:h-[600px] rounded-xl shadow-2xl overflow-hidden">
        {/* Images (Main content) */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />

            {/* Caption Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 text-left bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-3xl font-bold text-white leading-tight sm:text-left pb-4 sm:pb-0 text-center">
                {image.caption}
              </h3>
            </div>
          </div>
        ))}

        {/* --- Navigation Buttons --- */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white z-20 hover:bg-black/60 transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/40 text-white z-20 hover:bg-black/60 transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        {/* --- Pagination Dots --- */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-red-700 scale-125"
                  : "bg-white/80 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default SimpleGallery;

export default Gallery;
