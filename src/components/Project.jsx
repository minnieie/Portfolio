import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  media,
  processSteps = [],
  setPreview,
  challenges = [],
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 853 });

  const projectRef = useRef();

  useEffect(() => {
    if (!isMobile) return; // Only activate observer on mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(`Project "${title}" isIntersecting?`, entry.isIntersecting);

        if (entry.isIntersecting) {
          setPreview(image);
        } else {
          // Only clear preview if this project is currently showing it
          setPreview((prev) => (prev === image ? null : prev));
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element visible
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
      setPreview(null);
    };
  }, [isMobile, image, setPreview, title]);

  return (
    <>
      <div
        ref={projectRef}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-10 gap-4"
        onMouseEnter={() => {
          if (!isMobile) setPreview(image);
        }}
        onMouseLeave={() => {
          if (!isMobile) setPreview(null);
        }}
      >
        {/* Left side: title + tags */}
        <div className="w-full sm:w-auto">
          <p className="text-2xl break-words">{title}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-sand">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="whitespace-nowrap text-sm sm:text-base"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Right side: button */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation self-start sm:self-auto"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          media={media}
          processSteps={processSteps}
          closeModal={() => setIsHidden(false)}
          challenges={challenges}
        />
      )}
    </>
  );
};

export default Project;
