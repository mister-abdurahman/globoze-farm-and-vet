import React, { useState } from "react";

type Props = {
  videoIds?: string[];
};

const defaultVideos = [
  // Replace these sample IDs with your real YouTube IDs
  "dg2rFvz-NWA",
  "CZqmYF_lRd4",
];

const VideoCard: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-black">
      <div className="w-full h-56 sm:h-72 lg:h-80">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=0&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

const VideoTestimonials: React.FC<Props> = ({ videoIds = defaultVideos }) => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
            Client Video Testimonials
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from clients — watch short videos from those we've
            helped.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {videoIds.map((id) => (
            <VideoCard key={id} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
