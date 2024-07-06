import CustomIcon from "./components/misc/CustomIcon";

export const projects = [
  {
    projectLabel: "estimate-generator",
    projectName: "Estimate Generator",
    projectType: "Fullstack Webapp",
    imgSrc: "/estimate-generator-img.png",
    imgAlt: "Estimate Generator",
    prod: "",
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
        icon: <CustomIcon svg="/typescript.svg" />,
      },
      database: {
        name: "Neon Serverless Postgres",
        icon: <CustomIcon />,
      },
      infrastructure: {
        name: "Vercel",
        icon: <CustomIcon />,
      },
      metaFramework: {
        name: "Next.js 14 App Router",
        icon: <CustomIcon />,
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
    summary: "",
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
        icon: <CustomIcon svg="/typescript.svg" />,
      },
      infrastructure: {
        name: "Vercel",
        icon: <CustomIcon />,
      },
      frontendFramework: {
        name: "Vite & React.ts",
        icon: <CustomIcon />,
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
    summary: "",
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
        icon: <CustomIcon svg="/typescript.svg" />,
      },
      infrastructure: {
        name: "Vercel",
        icon: <CustomIcon />,
      },
      frontendFramework: {
        name: "Vite & React.ts",
        icon: <CustomIcon />,
      },
    },
  },
];
