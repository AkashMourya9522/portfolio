import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akash Mourya Bollu",
  initials: "AK",
  url: "https://yourportfolio.com",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Full-stack developer passionate about building impactful web apps using the MERN stack. Enthusiast in hackathons, problem-solving, and learning new tech.",
  summary:
    "I'm Akash, a curious and creative full-stack developer. I've built projects using the MERN stack, participated in multiple hackathons, and enjoy bringing ideas to life through code. My focus is on user-centric design, backend reliability, and seamless frontend experiences.",
  // avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "TypeScript",
    "JavaScript",
    "CSS",
    "Java",
    "C++",
    "Git",
    "Github"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "akash@example.com",
    tel: "+91XXXXXXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AkashMourya9522",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akash-mourya-03a050314/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/AkashMoury01",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:akashmourya9522@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Intern",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/freelance.png",
      start: "May 2025",
      end: "July 2025",
      description:
        "Developed a secure and efficient file sharing web application, focusing on scalable backend architecture and intuitive user experience",
    },
    {
      company: "Intern",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Front End Developer",
      logoUrl: "/freelance.png",
      start: "May 2024",
      end: "July 2024",
      description:
        "Designed responsive and accessible website for seamless use across mobile and desktop devices.",
    }
  ],

  education: [
    {
      school: "SRKR Engineering College",
      href: "#",
      degree: "Bachelor's in Computer Science",
      logoUrl: "/college.png",
      start: "2022",
      end: "2026",
    },
  ],

  projects: [
    {
      title: "AI Medical Assistant",
      href: "https://ai-medical-assistant-nu.vercel.app/",
      // dates: "Aug 2024 - Present",
      active: true,
      description:
        "Built a full-stack AI medical assistant with sign in, live call, live report features",
      technologies: [
        "Next.js",
        "Vapi Ai",
        "Postgresql",
        "Clerk",
        "TailwindCSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/AkashMourya9522/Ai-Medical-Assistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Real Estate Application",
      href: "https://real-estate-z2oe.onrender.com/",
      // dates: "Aug 2024 - Present",
      active: true,
      description:
        "Built a full-stack real estate platform with property listings, user login, and filtering features.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "TailwindCSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/AkashMourya9522/Real-Estate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "March 2024",
      location: "Offline",
      description:
        "A platform for alumni to connect, and explore opportunities. Features include authentication, post sharing, and messaging.",
      image: "/hackathon1.png",
      links: [],
    },
  ],
} as const;
