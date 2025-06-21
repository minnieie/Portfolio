import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";

// Your skills data
export const skills = [
  {
    name: "Visual Studio Code",
    username: "@vscode",
    body: "Efficient code editor and debugger I use daily.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "C#",
    username: "@csharp",
    body: "Strong experience building game logic and apps.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "HTML5",
    username: "@html5",
    body: "Proficient in semantic markup and responsive web structures.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    username: "@css3",
    body: "Skilled in styling, animations, and layout techniques.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    username: "@javascript",
    body: "Experienced in interactive front-end features and logic.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    username: "@tailwindcss",
    body: "Utility-first CSS framework for rapid UI development.",
    img: "assets/logos/tailwindcss.svg",
  },
  {
    name: "Unity",
    username: "@unity",
    body: "Game development platform for immersive 3D and 2D experiences.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  },
  {
    name: "Adobe Photoshop",
    username: "@photoshop",
    body: "Photo editing and digital art creation for design assets.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
  {
    name: "Canva",
    username: "@canva",
    body: "Quick and versatile graphic design for marketing materials.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Figma",
    username: "@figma",
    body: "UI/UX design and prototyping for seamless user experiences.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];


// Divide skills into two rows for marquee
const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
const secondRow = skills.slice(Math.ceil(skills.length / 2));

const SkillCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] " +
          "bg-gray-800 " + // subtle base color
          "hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 " + // vibrant on hover
          "hover:shadow-lg transition-all duration-300"
      )}
      title={name}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10"
          width="32"
          height="32"
          alt={`${name} logo`}
          src={img}
          loading="lazy"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/90">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Skills</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((skill) => (
            <SkillCard key={skill.username} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((skill) => (
            <SkillCard key={skill.username} {...skill} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
