import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = ["Overview", "Development Process", "Demo", "Challenges"];

// Improved YouTube ID extractor that handles more URL formats
function extractYouTubeId(url) {
  if (!url) return null;
  
  // Handles:
  // - youtu.be/<id>
  // - youtube.com/watch?v=<id>
  // - youtube.com/embed/<id>
  // - youtube.com/v/<id>
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  processSteps = [],
  screenshots = [],
  challenges = [],
  technologies = [],
  media = {},
  closeModal,
}) => {
  const [activeTab, setActiveTab] = useState("Overview");

  // Extract YouTube ID from either media.youtube or media.video
  const youtubeId = extractYouTubeId(media.youtube || media.video);
  
  // Check if we have a local video (not YouTube)
  const hasLocalVideo = media.video && !youtubeId && 
                       !media.video.includes('youtu.be') && 
                       !media.video.includes('youtube.com');

  useEffect(() => {
    console.log("Media props:", media);
    console.log("YouTube ID:", youtubeId);
    console.log("Has local video:", hasLocalVideo);
  }, [media, youtubeId, hasLocalVideo]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight p-6 md:p-12">
      <button
        onClick={closeModal}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        aria-label="Close modal"
      >
        ✕
      </button>

      <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-6">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-white">{title}</h1>

        {/* Tabs */}
        <div className="flex border-b border-white/20 mb-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-semibold text-sm rounded-t-lg ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-white">
          {activeTab === "Overview" && (
            <>
              <img
                src={image}
                alt={title}
                className={`rounded-lg mb-6 shadow-lg ${
                  image.includes("DUX_ASG1.png")
                    ? "max-w-sm mx-auto"
                    : "w-full"
                }`}
              />
              <p className="mb-4">{description}</p>
              {subDescription.map((text, i) => (
                <p key={i} className="mb-2 text-gray-300">
                  {text}
                </p>
              ))}

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    title={tag.name}
                    className="h-8 w-auto"
                  />
                ))}
              </div>

              {/* Visit Link */}
              {media?.figma ? (
                <a
                  href={media.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-5 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition"
                >
                  View Prototype on Figma
                </a>
              ) : media?.repository ? (
                <a
                  href={media.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-5 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition"
                >
                  View Code on GitHub
                </a>
              ) : null}
            </>
          )}

          {activeTab === "Development Process" && (
            <div className="space-y-8">
              {processSteps.length === 0 ? (
                <p className="text-gray-400">No development process steps available.</p>
              ) : (
                processSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      {idx < processSteps.length - 1 && (
                        <div className="w-px bg-white/30 flex-1 mt-2"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                      {step.image && (
                        <img
                          src={step.image}
                          alt={step.title}
                          className="mt-3 rounded-md border border-white/10 max-w-full md:max-w-md"
                        />
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === "Demo" && (
            <div>
              {youtubeId ? (
                <div className="aspect-video w-full max-h-96 rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                    title={`${title} Demo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : hasLocalVideo ? (
                <video
                  controls
                  src={media.video}
                  className="w-full max-h-96 rounded-lg shadow-lg"
                  onError={(e) => {
                    console.error("Error loading video:", media.video);
                    e.target.style.display = 'none';
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="bg-gray-800/50 p-8 rounded-lg text-center">
                  <p className="text-gray-400">No demo video available</p>
                </div>
              )}
            </div>
          )}

          {activeTab === "Challenges" && (
            <div className="space-y-6">
              {challenges.length === 0 ? (
                <p className="text-gray-400">No challenges documented.</p>
              ) : (
                challenges.map(({ problem, solution }, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 p-4 rounded-md border border-white/20"
                  >
                    <h4 className="font-semibold text-red-400 mb-2">Challenge</h4>
                    <p className="mb-3">{problem}</p>
                    <h4 className="font-semibold text-green-400 mb-2">Solution</h4>
                    <p>{solution}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;