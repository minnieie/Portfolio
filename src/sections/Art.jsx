import React from "react";
import { useNavigate } from "react-router-dom";

const Art = () => {
  const navigate = useNavigate();

  // List of all artwork filenames
  const artworks = [
    "huacheng.gif", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg",
    "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg",
    "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg",
    "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg",
    "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg",
    "38.jpg", "39.jpg",
  ];

  return (
    <section className="c-space section-spacing relative max-w-6xl mx-auto px-4">
      {/* Top Bar: Back button + Centered Heading */}
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

        <h2 className="text-heading text-white text-center">
          My Artworks
        </h2>
      </div>

      <p className="text-center subtext mb-10 text-white/80">
        A curated gallery of my favorite pieces
      </p>

      {/* Masonry-style layout */}
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {artworks.map((filename, index) => (
          <div key={index} className="break-inside-avoid">
            <img
              src={`assets/art/${filename}`}
              alt={`Art ${index + 1}`}
              className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Art;
