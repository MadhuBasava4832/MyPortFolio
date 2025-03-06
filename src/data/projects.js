import { BiLogoCss3, BiLogoHtml5, BiLogoMongodb, BiLogoReact, BiLogoJavascript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase,  } from "react-icons/tb";

const ProjectsData = [
  {
    id: "1",
    name: "Anime Website",
    image: "./narutowebsite.png",
    icons: [BiLogoHtml5, BiLogoCss3,BiLogoJavascript],
    description: "This website provides information about popular , top-rated and upcoming animes.",
    github: "https://github.com/MadhuBasava4832/Naruto",
    demo: "https://madhubasava4832.github.io/Naruto/ ",
  },
  {
    id: "2",
    name: "School Management",
    image: "./sschome.png",
    icons: [BiLogoReact, BiLogoMongodb, TbDatabase],
    description: "A school management system for tracking fees, student performance, and academic records efficiently.",
    github: "https://github.com/kathipallimadhukiran/school_site",
    demo: "https://school-site-fawn.vercel.app/",
  },
  {
    id: "3",
    name: "Sports Academy",
    image: "./",
    icons: [BiLogoHtml5, BiLogoCss3,BiLogoJavascript],
    description: "A college portal for students featuring lost and found, complaint registration, and other essential services.",
    github: "https://github.com/22a91a61j6/Sports-Mania",
    demo: "https://sports-mania-912v.vercel.app/",
  },
  {
    id: "4",
    name: "College Features",
    image: "./",
    icons: [BiLogoReact, BiLogoMongodb,TbApi ],
    description: "A college portal for students featuring lost and found, complaint registration, and other essential services.",
    github: "https://colleguim-main.vercel.app/",
    demo: "https://colleguim-main.vercel.app/",
  },
  
];

export default ProjectsData;
