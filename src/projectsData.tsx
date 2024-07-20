import CustomIcon from "./components/misc/CustomIcon";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiVercel } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export const projects = [
  {
    projectLabel: "estimate-generator",
    projectName: "Estimate Generator",
    projectType: "Fullstack Webapp",
    imgSrc: "/estimate-generator-img.png",
    imgAlt: "Estimate Generator",
    prod: "https://estimategeneratorapp.com/",
    github: "https://github.com/MikeLautensack/Estimate-Generator",
    docs: "https://estimate-generator-docs.vercel.app/",
    href: "/projects/estimate-generator",
    summary:
      "Estimate Generator is webapp to help contractors and small business's create and manage work estimates and change orders.  Contractors can create work estimates for their customers and benefit from Estimate Generator's automated email systems that sends emails to customers every time a contractor creates and estimate, edits an estimate, or creates a change order.  Customers of contractors can use the account automatically created for them to view estimates or request a change order and can login to their accout by using the \"magic link\" in the emails.",
    description:
      "Estimate Generator is build with Next.js version 14 app router and a Neon serverless Postgres database.  The front end is leverageing React's new sever component model as well as using Next.js SSR and caching features.  The backend is build with Next.js route handlers and uses REST architecture.  I choose to build the backend with Next.js route handlers in the form of a REST api instead of server actions because I wanted to be able to use the same backend for a React-Native client coming soon as well as leverage existing REST architecture standards and use postman to do extensive api testing.  I am using a Neon serverless postgres database with Drizzle ORM for data schema, migrations, and querys.  The project uses NextAuth.js/Auth.js version 5 to implment a role-based authentication and authorization system with credentials login for users with a contractor role and magic link login for users with a customer role.",
    loom: "",
    galary: [
      {
        img: "",
        heading: "",
      },
    ],
    bullets: [
      { id: 1, text: "• Next.js / React.js" },
      { id: 2, text: "• Auth.js" },
      { id: 3, text: "• Vercel Serverless" },
      { id: 4, text: "• Drizzle ORM + Neon Serverless PostgreSQL" },
    ],
    stack: {
      lang: {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-white" />,
      },
      database: {
        name: "Neon Serverless Postgres",
        icon: <FaDatabase className="text-white" />,
      },
      infrastructure: {
        name: "Vercel",
        icon: <SiVercel className="text-white" />,
      },
      metaFramework: {
        name: "Next.js 14 App Router",
        icon: <SiNextdotjs className="text-white" />,
      },
    },
  },
  {
    projectLabel: "galaxy-generator",
    projectName: "Galaxy Generator",
    projectType: "Course Project",
    imgSrc: "/galaxy-generator-img.png",
    imgAlt: "Galaxy Generator",
    prod: "https://galaxy-generator-gray-five.vercel.app/",
    github: "https://github.com/MikeLautensack/Galaxy-Generator",
    docs: "",
    href: "/projects/galaxy-generator",
    summary:
      'Galaxy Generator is a course project from "Three.js Journey", a course on three.js and react-three-fiber.  Tweak the values in the control panel on the top right of the browser and you can see your galaxy change in real time.  This project is build using Vite with Javascript, Three.js, and datgui.',
    description: "",
    loom: "",
    galary: [
      {
        img: "",
        heading: "",
      },
    ],
    bullets: [
      { id: 1, text: "• Javascript" },
      { id: 2, text: "• Vite" },
      { id: 3, text: "• Three.js" },
      { id: 4, text: "• Vercel" },
    ],
    stack: {
      lang: {
        name: "Javascript",
        icon: <RiJavascriptFill className="text-white" />,
      },
      infrastructure: {
        name: "Vercel",
        icon: <SiVercel className="text-white" />,
      },
      frontendFramework: {
        name: "Vite & React.ts",
        icon: <SiVite className="text-white" />,
      },
    },
  },
  {
    projectLabel: "raging-sea",
    projectName: "Raging Sea",
    projectType: "Course Project",
    imgSrc: "/raging-sea-img.png",
    imgAlt: "Raging Sea",
    prod: "https://raging-sea-nine-kappa.vercel.app/",
    github: "https://github.com/MikeLautensack/Raging-Sea",
    docs: "",
    href: "/projects/raging-sea",
    summary:
      'Raging Sea is a course project from "Three.js Journey", a course on three.js and react-three-fiber.  Tweak the values in the control panel on the top right of the browser and you can see the raging sea change in real time.  This project is build using Vite with Javascript, Three.js, datgui, and custom glsl shaders.',
    description: "",
    loom: "",
    galary: [
      {
        img: "",
        heading: "",
      },
    ],
    bullets: [
      { id: 1, text: "• Javascript" },
      { id: 2, text: "• Vite" },
      { id: 3, text: "• Three.js" },
      { id: 4, text: "• Vercel" },
    ],
    stack: {
      lang: {
        name: "Javascript",
        icon: <RiJavascriptFill className="text-white" />,
      },
      infrastructure: {
        name: "Vercel",
        icon: <SiVercel className="text-white" />,
      },
      frontendFramework: {
        name: "Vite & React.ts",
        icon: <SiVite className="text-white" />,
      },
    },
  },
];
