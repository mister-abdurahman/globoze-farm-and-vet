import React from "react";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            We care for every animal - from playful puppies to gentle cats and
            even exotic friends, each of them holds a special place in our
            hearts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg bg-white/5 transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className={`w-full h-56 object-cover object-center sm:h-48 lg:h-56`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
