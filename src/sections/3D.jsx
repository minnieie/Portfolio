import React from "react";
import { useNavigate } from "react-router-dom";

const threeDProjects = [
  {
    title: "Mazinger Z",
    embedUrl: "https://sketchfab.com/models/4b15cfefbeae405790dc30fd9c6f173c/embed",
    note: "My first walk cycle with some rigging flaws , still proud of the style!"
  },
  {
    title: "Skull Panda Figurine",
    embedUrl: "https://sketchfab.com/models/83a8e01a60ec42a3b2bb05a72e5f0d2f/embed",
    note: "Models for Integrated Project Y1.2"
  },
  {
    title: "Hello Kitty Figurine",
    embedUrl: "https://sketchfab.com/models/13fdad84e9f145ffa073ba8f2b8ddfab/embed",
    note: "Model for Integrated Project Y1.2"
  }
];

const ThreeD = () => {
  const navigate = useNavigate();

  return (
    <section className="c-space section-spacing relative max-w-6xl mx-auto px-4">
      {/* Top Bar */}
      <div className="relative mb-10">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="flex items-center text-white hover:text-gray-300 transition-colors absolute left-0 top-1/2 -translate-y-1/2"
          style={{ gap: "0.25rem" }}
        >
          <span className="text-2xl leading-none">←</span>
          <span className="font-medium text-base hidden sm:inline">Back</span>
        </button>

        <h2 className="text-heading text-white text-center">My 3D Work</h2>
      </div>

      <p className="text-center subtext mb-10 text-white/80">
        A collection of character models, props, and animations
      </p>

      {/* Grid of embedded Sketchfab viewers */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {threeDProjects.map((item, idx) => (
          <div key={idx} className="rounded-lg shadow-md overflow-hidden bg-neutral-800">
            <iframe
              title={item.title}
              src={item.embedUrl}
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              className="w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeD;
