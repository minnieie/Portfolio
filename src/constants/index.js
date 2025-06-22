const base = import.meta.env.BASE_URL;
export const myProjects = [
  {
    id: 1,
    title: "Medieval Round Table Hall",
    description: "A modular 3D environment built for real-time rendering, featuring an L-shaped corridor leading to a magical round table hall with floating crystal centerpiece.",
    subDescription: [
      "Created 4+ modular assets in Maya using shared texture atlas for optimized rendering",
      "Developed hero floating crystal asset using high-low poly workflow with Substance Painter texturing",
      "Implemented trim sheet texturing for efficient surface detail repetition",
      "Configured dynamic lighting and post-processing (including emissive bloom) in Unity",
      "Delivered playable third-person exploration build with camera controller"
    ],
    processSteps: [
      {
        title: "Concept Development",
        description: "Created initial sketches and mood boards to establish the medieval fantasy aesthetic and layout of the hall.",
        image: "/Portfolio/assets/process/3RT_ASG1_pureref.png"
      },
      {
        title: "Modular Asset Creation",
        description: "Built 4+ modular assets in Maya using shared texture atlas for optimized rendering and seamless environment construction.",
        image: "/Portfolio/assets/process/modular-assets.png" 
      },
      {
        title: "WhiteBoxing & Layout",
        description: "Created a block-out version of the environment using simple geometry to establish scale and layout.",
        image: "/Portfolio/assets/process/whitebox.png"
      },
      {
        title: "Hero Asset Development",
        description: "Created the floating crystal centerpiece using high-low poly workflow with detailed Substance Painter texturing.",
        image: "/Portfolio/assets/process/3RT_ASG1_crystal.png"
      },
      {
        title: "Unity Integration",
        description: "Integrated the floating crystal centerpiece into the Unity environment, ensuring proper scale and interaction.",
        image: "/Portfolio/assets/process/3RT_ASG1_integration.png"
      },
      {
        title: "Lighting & Effects",
        description: "Configured dynamic lighting and post-processing effects in Unity, including emissive bloom for the crystal. I also integrated BGM and VFX of fire for an immersive experience.",
        image: "/Portfolio/assets/process/3RT_ASG1_lighting.png"
      },
      {
        title: "Final Product",
        image: "/Portfolio/assets/process/3RT_ASG1_final.png"
      },
    ],
    challenges: [
    {
      problem: "Managing texture optimization while maintaining visual quality for modular assets.",
      solution: "Used a shared texture atlas and trim sheets to optimize memory usage without compromising aesthetics."
    },
    {
      problem: "Learning to add BGM and VFX of fire in Unity using spritesheets on my own was difficult.",
      solution: "Utilized online tutorials to implement audio and visual effects, enhancing the overall atmosphere."
    },

  ],
  href: null,
  media: {
    video: "https://youtu.be/hugOmLFzsw8?si=v0Qh06QOILxML8KY",
    build: "/downloads/medieval-hall-build.zip"
  },
  image: "/Portfolio/assets/projects/medieval-hall.jpg",
  tags: [
      { id: 1, name: "Unity", path: "/Portfolio/assets/logos/unity.svg" },
      { id: 2, name: "Maya", path: "/Portfolo/assets/logos/maya.svg" },
      { id: 3, name: "Substance Painter", path: "/Portfolio/assets/logos/substance-painter.svg" },
    ],
  },
 {
    id: 2,
    title: "Money Heist",
    description: "A first-person stealth game with time pressure mechanics, featuring security systems, NPC interactions, and 40+ collectibles across interconnected indoor/outdoor environments.",
    subDescription: [
      "Implemented core gameplay systems: door interactions (E key), dynamic NPC spawns, laser hazards, and CCTV detection",
      "Developed UI systems: real-time score counter (155+ points possible), collectible tracker (40 items), and 3-minute mission timer",
      "Created day-night cycle with rotating directional light for atmospheric immersion",
      "Programmed security systems: auto-closing doors, keycard access, and laser traps",
      "Integrated audio systems: BGM, SFX for interactions (collectibles score +1, hazards -1 health)"
    ],
    media: {
      video: "https://youtu.be/1zsLKv9l6HA?si=NrKzOPAkt1NIezcm",
      repository: "https://github.com/minnieie/MoneyHeist.git"
    },
    image: "/Portfolio/assets/projects/money-heist.jpg",
    processSteps: [
      {
        title: "Switching Cameras between Main camera and Player camera",
        description: "Implemented smooth transitions between the main camera and the player camera to show mission panel and player view.",
        image:  "/Portfolio/assets/process/I3E_ASG1_Panel.png"
      },
      {
        title: "Importing Assets",
        description: "Utilized the Unity Asset Store and Sketchfab to find and import high-quality assets and made the items functionable to steal the items using raycast.",
        image: "/Portfolio/assets/process/I3E_ASG1_Assets.png"
      },
      {
        title: "Implement CCTV cameras that could move, detect the player and decrease their health upon collision.",
        description: "Utilized the Unity Asset Store and Sketchfab to find and import high-quality assets and made the items functionable to steal the items using raycast.",
        image: "/Portfolio/assets/process/I3E_ASG1_CCTV.png"
      },
      {
        title: "NPCs",
        description: "Implemented NPCs that wander around the map using navmesh and able to drop items.",
        image: "/Portfolio/assets/process/I3E_ASG1_NPC.png"
      },
      {
        title: "Locked Doors",
        description: "Implemented locked doors that require keycards to access, adding an extra layer of challenge.",
        image: "/Portfolio/assets/process/I3E_ASG1_LockedDoor.png"
      },
      {
        title: "SFX and UI",
        description: "Implemented sound effects and user interface elements to enhance gameplay experience.",
        image: "/Portfolio/assets/process/I3E_ASG1_SFX.png"
      },
      {
        title: "You Win!",
        description: "Upon player collecting all collectibles, a congratulatory message is displayed.",
        image: "/Portfolio/assets/process/I3E_ASG1_Congrats.png"
      },
    ],
    challenges: [
    {
      problem: "When Player dies, the collectibles should reset to their original positions.",
      solution: "Instead of destroying the collectibles, I enable back their visibility and reset their positions to the original spawn points.",
    },
    {
      problem: "Collectible count was not updating correctly when the player collected items or respawned.",
      solution: "Hardcoded the maximum collectible count (e.g. 40) to prevent dynamic NPC drops from affecting the total. Used condition checks and state reset logic to ensure the count displays accurately after player respawn."
    },
    {
      problem: "Background music (BGM) did not reset correctly after the player died and restarted the game.",
      solution: "Implemented audio state management to stop the death BGM and restart the main theme when the player clicks restart. Ensured BGM transitions are handled consistently through scene reload or reset triggers through a UIManager script."
    },
    {
      problem: "Raycasting would sometimes detect multiple collectibles at once due to them being placed too closely together.",
      solution: "Adjusted the BoxCollider sizes on collectibles to better match visual bounds and reduce overlap. Aligned the raycast with the camera’s forward direction and ensured it dynamically follows the player's view to detect only the nearest collectible accurately."
    },
    {
      problem: "Struggled with connecting button events to my custom scripts in Unity using the OnClick inspector. It was confusing to figure out how to link methods even though the script was already attached.",
      solution: "Learned how to expose public methods and link them properly through Unity's Inspector by dragging the GameObject with the script into the OnClick slot and selecting the right method from the dropdown."
    }

  ],

    tags: [
      {
        id: 1,
        name: "Unity",
        path: "/Portfolio/assets/logos/unity.svg"
      },
      {
        id: 2,
        name: "C#",
        path: "/Portfolio/assets/logos/csharp.svg"
      },
      {
        id: 3,
        name: "GitHub",
        path: "/Portfolio/assets/logos/github.svg"
      },
    ],
    technicalDetails: {
      engine: "Unity 6+",
      systems: [
        "Physics-based interactions",
        "Raycast detection",
        "Prefab instantiation",
        "Scriptable Objects"
      ],
      achievements: [
        "Implemented all Merit-grade requirements",
        "Dynamic NPC behavior",
        "Complex door state machine",
        "Modular collectible system"
      ]
    }
  },
  {
    id: 3,
    title: "BLACKPINK Revamped Website",
    description:
      "A responsive, visually immersive front-end website showcasing BLACKPINK through engaging micro-interactions and scroll-based animations.",
    subDescription: [
      "Designed and built a fully responsive Single Page Application using HTML, CSS, and JavaScript.",
      "Implemented scroll-triggered parallax effects and mouseover animations to elevate user engagement.",
      "Ensured cross-browser and mobile compatibility for a smooth user experience across all devices.",
      "Deployed the project to GitHub Pages with proper file structure and version control using Git.",
    ],
    media: {
      video: "https://youtu.be/NPNUpSrweV4?si=k3XiSor4eRMGnz8y",
      repository: "https://github.com/minnieie/BLACKPINK.git"
    },
    image: "/Portfolio/assets/projects/BLACKPINK.png", // You can swap this with your actual image path
    processSteps: [
    {
      title: "Building a Responsive Navigation Bar",
      description: "Created a hamburger-style mobile menu with JavaScript to toggle visibility and ensure the navigation bar adapts across screen sizes.",
      image: "/Portfolio/assets/process/ID_ASG1_Nav.png"
    },
    {
      title: "Implementing the Mini Store",
      description: "Developed a functional store page where users could add and remove items from the cart. Ensured quantity updates, total price calculation, and checkout validation were working correctly.",
      image: "/Portfolio/assets/process/ID_ASG1_Store.png"
    },
    {
      title: "Embedding Fullscreen YouTube Video",
      description: "Used the YouTube Iframe API on the About page to autoplay, loop, and allow pause/play interactions. Ensured the video was full-width and responsive.",
      image: "/Portfolio/assets/process/ID_ASG1_video.png"
    },
    {
      title: "Final Testing & Deployment",
      description: "Tested across different browsers and screen sizes for compatibility. Deployed the final version using GitHub Pages with a clean project structure.",
      image: "/Portfolio/assets/projects/BLACKPINK.png"
    }
  ],

    challenges: [
    {
      problem: "Creating a functional mini store was tricky — especially validating item quantities, ensuring price totals matched, and syncing everything correctly on checkout.",
      solution: "Implemented dynamic form validation and real-time cart updates using JavaScript. Carefully handled edge cases like incorrect quantities and missing data to ensure consistent price calculations and a smooth checkout process.",
    },
    {
      problem: "I wanted to embed a fullscreen YouTube video on the About page that auto-plays, loops, and lets users pause or resume playback — but getting all those features working smoothly together was challenging.",
      solution: "Used the YouTube Iframe API to create a custom embedded video player. Enabled autoplay and looping using `playerVars`, and made sure users could control playback (pause/play) while maintaining responsiveness and full-width scaling."
    },
  ],
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/Portfolio/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "/Portfolio/assets/logos/css.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/Portfolio/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "GitHub",
        path: "/Portfolio/assets/logos/github.svg",
      },
    ],
  },

  {
    id: 4,
    title: "Dream House",
    description:
      "An immersive 3D environment built in Unity simulating a my Dream House, designed as part of a spatial theory and level design assignment.",
    subDescription: [
      "Conceptualized floorplans for a realistic multi-room house with cohesive spatial layout.",
      "Modeled architectural structure, furniture, and fittings using Unity’s ProBuilder and Polybrush tools.",
      "Created realistic terrain and landscaping with Unity’s Terrain engine, integrating natural elements like foliage, roads, and decorative features.",
      "Designed ambient lighting to evoke a warm, welcoming mood and enhance the overall environment experience using Global Illumination.",
      "Produced a walkthrough video to showcase the environment and provide an engaging virtual tour of the space."
    ],
    media: {
      video: "https://youtu.be/HxFdH1vYxhk?si=qCKE4ma0GxqW4blr",
    },
    image: "/Portfolio/assets/projects/DreamHouse.jpg",
    processSteps: [
    {
      title: "Using ProBuilder for Architectural Modeling",
      description: "Being my first Unity project, it was hard to utilize ProBuilder to create detailed architectural models, including walls, windows, and doors, ensuring accurate spatial representation.",
      image: "/Portfolio/assets/process/STLD_ASG1_Floorplan.png"
    },
    {
      title: "Adding Unity Assets for Furniture and Decor",
      description: "Incorporated various 3D models and textures for furniture and decor elements using Unity’s Asset Store, enhancing the overall realism of the environment. I also created added terrain and a pool.",
      image: "/Portfolio/assets/process/STLD_ASG1_Assets.png"
    },
    {
      title: "Global Illumination for Realistic Lighting",
      description: "Utilized Unity's Global Illumination to create realistic lighting effects, enhancing the mood and atmosphere of the environment.",
      image: "/Portfolio/assets/process/STLD_ASG1_Lighting.png"
    }
  ],
    challenges: [
    {
      problem: "Global Illumination was difficult to set up correctly, especially for achieving realistic lighting effects in the house.",
      solution: "Utilized Unity's lighting settings and experimented with different configurations to achieve the desired ambiance. Leveraged baked lighting for static objects and real-time lighting for dynamic elements."
    },
  ],
    tags: [
      {
        id: 1,
        name: "Unity",
        path: "/Portfolio/assets/logos/unity.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/Portfolio/assets/logos/csharp.svg",
      },
    ],
  },
  {
    id: 5,
    title: "3D Chess Piece",
    description:
      "A reconstructed South German Staunton chess set modeled in Maya, textured with wear-and-tear aesthetics for real-time rendering.",
    subDescription: [
      "Modeled six individual chess pieces (Pawn, Rook, Knight, Bishop, Queen, King) based on photographic reference to preserve authentic silhouette and proportions.",
      "UV unwrapped each piece with distortion checks and multi-quadrant layouts, including complex UV mapping for high-poly Knight model.",
      "Applied textures with artistic freedom while retaining reference color schemes, incorporating aging effects to enhance realism.",
      "Presented assets in a clean, optimized turntable setup using Unity3D and After Effects, with transitions from textured to wireframe views.",
    ],
    href: "",
    logo: "",
    image: "/Portfolio/assets/projects/3DF_Chesspiece.png",
    media: {
     youtube: "https://youtu.be/tu4TYBzxmbY?si=ui2h4QYocMerHeVe",
    },
    processSteps: [
    {
      title: "Using Maya for 3D Modeling",
      description: "Being my first 3D modeling project, it was challenging to create detailed models of chess pieces using Maya, this was my first 3 chess piece model.",
      image: "/Portfolio/assets/process/3DF_ASG1_3chess.png"
    },
    {
      title: "Turntable for Knight Piece",
      description: "Created a turntable animation for the knight piece in After Effects to showcase its design from all angles.",
      image: "/Portfolio/assets/process/3DF_ASG1_knight.png"
    },
    {
      title: "UV Unwrapping & Check",
      description: "Unwrapped the chess piece UVs and applied a checker texture to identify stretching or distortion. Adjusted the UV islands to ensure they appeared evenly scaled and neutral (white), indicating a clean, undistorted layout suitable for texturing.",
      image: "/Portfolio/assets/process/3DF_ASG1_UV_White.png"
    }
  ],
challenges: [
  {
    problem: "Grasping Maya's complex interface and 3D modeling tools was initially overwhelming, especially when trying to replicate intricate chess piece details with accuracy.",
    solution: "Overcame this by breaking down each piece into simpler geometric forms and using photo references as visual anchors. Gradually built confidence by practicing with modeling tools like extrusion, beveling, and subdivision surfaces."
  },
  {
    problem: "UV unwrapping posed difficulties, particularly in maintaining clean, distortion-free UV maps across multiple chess pieces, especially the Knight.",
    solution: "Learned to identify and minimize stretching through distortion check modes and organized UV shells across multiple quadrants. Focused on proper seam placement and layout optimization for efficient texturing."
  },
  {
    problem: "Setting up effective lighting for the turntable presentation was challenging without washing out the textures or creating harsh shadows.",
    solution: "Experimented with three-point lighting and real-time engine settings in Unity3D, balancing highlight and ambient illumination to showcase texture detail while retaining silhouette clarity."
  },
],

    tags: [
      {
        id: 1,
        name: "Maya",
        path: "/Portfolio/assets/logos/maya.svg",
      },
      { id: 2, name: "Substance Painter", path: "/Portfolio/assets/logos/substance-painter.svg" },
      {
        id: 3,
        name: "After Effects",
        path: "/Portfolio/assets/logos/AfterEffects.svg",
      },
    ],
  },
  {
    id: 6,
    title: "PlayPals",
    description:
      "A social gaming platform designed to foster real friendships through shared gaming interests, personalized matchmaking, and community interaction.",
    subDescription: [
      "Designed end-to-end mobile and smartwatch prototypes using Figma for seamless social UX across devices.",
      "Conducted user research and created personas, empathy maps, and journey flows to inform inclusive, low-pressure matchmaking experiences.",
      "Built high-fidelity UI mockups focused on personalization, communication flexibility, and mental well-being.",
      "Explored competitive analysis of Discord, Reddit, and Facebook to identify design gaps and improve community bonding.",
    ],
    href: "",
    logo: "",
    image: "/Portfolio/assets/projects/DUX_ASG1.png",
    media: {
      youtube: "https://youtu.be/NYo75-VmRtM",
      figma: "https://www.figma.com/proto/rdSDIdkdHu0I66UwZHq2Dn/DUX_Assg1_P01_TohRuiMin?node-id=32-208&p=f&t=LviDjniY4Lp84IEl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=25%3A63&show-proto-sidebar=1"
    },
    processSteps: [
      {
        title: "User Research & Persona Development",
        description: "Kicked off the project with interviews and empathy mapping to define the emotional needs and social habits of casual gamers. Synthesized insights into clear user personas and journey maps to guide design decisions.",
        image: "/Portfolio/assets/process/DUX_ASG1_EmpathyMap.png"
      },
      {
        title: "User Journey Mapping & Competitive Analysis",
        description: "Analyzed user journeys and conducted competitive analysis to identify design gaps and opportunities for enhancing the user experience.",
        image: "/Portfolio/assets/process/DUX_ASG1_UserJourney.png"
      },
      {
        title: "User Interaction Flow",
        description: "Mapped out the core flows for both mobile and smartwatch experiences, focusing on smooth transitions across login, matchmaking, voice chat, and community browsing. This helped validate design choices and ensured each interaction aligned with the app’s low-pressure social vibe.",
        image: "/Portfolio/assets/process/DUX_ASG1_Interaction.png"
      },  

      {
        title: "A Day In The Life Storyboard",
        description: "Mapped out a typical user’s day to identify key interactions and emotional touchpoints, ensuring the design addressed real-world use cases.",
        image: "/Portfolio/assets/process/DUX_ASG1_Storyboard.png"
      },
      {
        title: "Wireframing & Low-Fidelity Prototypes",
        description: "Sketched mobile and smartwatch interface flows that mapped out key interactions—from matchmaking to voice calls. Prioritized accessibility and emotional comfort for users who may be new to social gaming spaces.",
        image: "/Portfolio/assets/process/DUX_ASG1_Wireframe.png"
      },
    ],
    challenges: [
      {
        problem: "Striking the right tone for both casual and introverted gamers without making features feel overwhelming.",
        solution: "Balanced design elements like soft UI prompts, opt-in voice features, and customizable profiles to cater to varying comfort levels."
      },
      {
        problem: "Designing for multiple platforms (mobile and smartwatch) while keeping the experience seamless and purpose-driven.",
        solution: "Created simplified versions of core features for the smartwatch and prioritized features best suited for on-the-go interactions."
      }
    ],

    tags: [
      {
        id: 1,
        name: "Figma",
        path: "/Portfolio/assets/logos/figma.svg",
      },
    ],
  },
  ];

export const myIntegratedProjects = [
  {
    id: 1,
    title: "Miao Miao",
    description: "An immersive, gamified e-commerce experience crafted for figurine enthusiasts. Miao Miao blends stunning 3D previews, a dynamic rewards system, and personalized features into a platform that feels more like a collectible playground than a shopping site. Designed with a sleek UI and an emphasis on community, it bridges commerce with collector culture.",
    subDescription: [
      "Modules: 3D Fundamentals, Applied Design, Interactive Development, Gamification Concepts, Production Management"
    ],
    image: "/Portfolio/assets/IP/1.2.png",
    href: "",
    tags: [
      { id: 1, name: "Firebase", path: "/Portfolio/assets/logos/firebase.svg" },
      {
        id: 2,
        name: "Jira",
        path: "/Portfolio/assets/logos/jira-5.png",
      },
      { id: 3, name: "Figma", path: "/Portfolio/assets/logos/figma.svg" },
      { id: 4, name: "Maya", path: "/Portfolio/assets/logos/maya.svg" },
      { id: 5, name: "Substance Painter", path: "/Portfolio/assets/logos/substance-painter.svg" },
      {
        id: 6,
        name: "HTML",
        path: "/Portfolio/assets/logos/html5.svg",
      },
      {
        id: 7,
        name: "CSS",
        path: "/Portfolio/assets/logos/css.svg",
      },
      {
        id: 8,
        name: "JavaScript",
        path: "/Portfolio/assets/logos/javascript.svg",
      },
    ],
    media: {
      youtube: "https://youtu.be/MmTF9HlZcJc?si=HA8hhY49zUJDdmXT",
      repository: "https://github.com/minnieie/MiaoMiao"
    },
processSteps: [
  {
    title: "Research & Project Vision",
    description: "Began by identifying target user demographics, specifically figurine collectors, and explored trends in gamified e-commerce and niche communities. Set the design vision around playful interaction, personalization, and community engagement inspired by collector culture.",
    image: "/Portfolio/assets/process/IP_1.2_GC.png"
  },
  {
    title: "Firebase Architecture & Backend Dev",
    description: "Built and structured the backend using Firebase for authentication, user profiles, point tracking, and wishlist logic. Developed JSON schemas to enable dynamic data display across product listings and checkout flows.",
    image: "/Portfolio/assets/process/IP_1.2_Firebase.png"
  },
  {
    title: "3D Asset Integration",
    description: "Made a Hello Kitty and SkullPanda 3D model in Maya and Substance Painter, then integrated them into the Sketchfab.",
    image: "/Portfolio/assets/process/IP_1.2_3D.png"
  },
  {
    title: "Wireframing to High-Fidelity Prototypes",
    description: "Contributed on low-fidelity wireframes that mapped out the shopping journey—from browsing to post-purchase engagement. Refined the UI with soft colors, bold CTAs, and intuitive gestures suited for both desktop and mobile devices.",
    image: "/Portfolio/assets/process/IP_1.2_Wireframe.png"
  },
  {
    title: "Sprint Management & Iteration",
    description: "Used Jira and SCRUM methodologies to manage agile sprints. Broke down backlog items, tracked velocity, and ran retrospectives to improve handoff efficiency between design, development, and QA.",
    image: "/Portfolio/assets/process/IP_1.2_Sprints.png"
  }
],
challenges: [

  {
    problem: "Designing gamification that genuinely benefits collector engagement instead of being gimmicky.",
    solution: "Introduced meaningful reward systems (e.g. login streaks, collector badges, discount tiers) that tie directly to user behavior and collection habits."
  },
  {
    problem: "Unifying multiple modules (AD, GC, PMT, ID, 3DF) into a cohesive brand story.",
    solution: "Connected the dots across design rationale, backend logic, and 3D design through a unified brand tone—centered on a welcoming, collector-first ethos exemplified by the cat-faced Miao Miao mascot."
  }
]

  }
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/6593553296",
    icon: `${import.meta.env.BASE_URL}assets/socials/whatsApp.svg`,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rui-min-toh-641a04303/",
    icon: `${import.meta.env.BASE_URL}assets/socials/linkedIn.svg`,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rui03lo/",
    icon: `${import.meta.env.BASE_URL}assets/socials/instagram.svg`,
  },
];




export const experiences = [
  {
    title: "Vice President",
    job: "Nullsec",
    date: "Oct 2024 – May 2025",
    contents: [
      "Promoted from Publicity Intern to Vice President after leading impactful campaigns via Instagram Stories, event posters, and workshop presentations.",
      "Oversaw Design Team and Security Operations, ensuring smooth event execution, operational workflows, and alignment with the CCA’s cybersecurity goals.",
      "Guided the team through a record-breaking year in 2025, achieving the highest membership signups in Nullsec’s history.",
      "Played a key role in organizing workshops and panel events, strengthening facilitation and public speaking experience while promoting cyber-awareness across campus."
    ],
  },
  {
    title: "Ambassador",
    job: "Ngee Ann Ambassadors",
    date: "May 2024 – Nov 2024",
    contents: [
      "Represented Ngee Ann Polytechnic at flagship events such as RED Camp and Youth Leaders Camp, serving as a welcoming face and student guide for prospective students.",
      "Visited secondary schools to promote NP courses and share personal experiences, connecting with students through engaging talks and interactive sessions.",
      "Equipped with in-depth knowledge of NP courses, campus life, and CCA opportunities to engage and inspire visitors during outreach tours and campus showcases.",
      "Contributed to RED Camp 2024's social media team, produced a video for the Centurions Tribe Showcase.",
      "Strengthened public speaking, teamwork, and interpersonal skills through live hosting, collaborative planning, and engaging group facilitation."
    ]
  },


  {
    title: "President",
    job: "Chinese Orchestra Marsiling Secondary School",
    date: "2023–2024",
    contents: [
      "Led the orchestra from a Certificate of Accomplishment (2021) to attaining Distinction in 2023, marking a major milestone in its history.",
      "Fostered a motivated and inclusive culture by encouraging members to balance discipline with joy in their musical journey.",
      "Took initiative to improve personal musicianship by attending Marsiling Chinese Orchestra rehearsals weekly, refining erhu technique and expanding musical interpretation.",
      "Organized sectional practices, bonding activities, and performance prep to ensure both musical excellence and member well-being.",
      "Acted as a bridge between student musicians and instructors, aligning artistic vision with team morale and logistical needs."
    ]
  }

];
export const skills = [
  {
    name: "Visual Studio Code",
    username: "@vscode",
    body: "Efficient code editing and debugging environment I use daily.",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "C#",
    username: "@csharp",
    body: "Strong experience in building game logic and apps using C#.",
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

