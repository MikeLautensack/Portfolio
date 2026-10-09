import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiVercel } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export const projects = [
  {
    projectLabel: "service-clerk",
    projectName: "ServiceClerk",
    projectType: "SaaS Product",
    imgSrc: "/service-clerk-img.png",
    imgAlt: "ServiceClerk homepage showing a sample job from quote to final payment",
    prod: "https://getserviceclerk.com/",
    github: "",
    docs: "",
    href: "/projects/service-clerk",
    cardDescription:
      "A field service management SaaS I founded and built for contractors — quotes, contracts, change orders, invoices, and payments, from the first quote to the final payment.",
    summary:
      "ServiceClerk is a field service management SaaS for independent contractors and the trades, and the product I'm taking to market. Contractors run the whole money side of a job in one place: build a quote, turn it into a signed contract, request a deposit, issue change orders and progress bills, and send the final invoice. Customers review, sign, and pay from a share link on their phone — no account needed. CRM, scheduling, and job-linked task management keep the day-to-day work close to the job. I designed, built, and launched it as the sole engineer across product, backend, infrastructure, and UI, growing it out of an earlier portfolio project, Estimate Generator.",
    description:
      "ServiceClerk is built on the Next.js 16 App Router with TypeScript, backed by Supabase PostgreSQL with Drizzle ORM as the query layer. Supabase Auth handles Google OAuth and email sign-in. Stripe Billing runs the SaaS subscriptions, while Stripe Connect onboards each contractor's own account so they can collect card and bank payments from homeowners for deposits, progress bills, and invoices. Payments are recorded in an append-only ledger, so documents say what is owed while the ledger records what actually moved. Resend delivers transactional email for account and customer-document workflows, Sentry provides production error and performance monitoring, and the app is deployed on Vercel.",
    loom: "",
    galary: [
      {
        img: "",
        heading: "",
      },
    ],
    bullets: [
      { id: 1, text: "• Next.js 16 / React" },
      { id: 2, text: "• Supabase (PostgreSQL)" },
      { id: 3, text: "• Drizzle ORM" },
      { id: 4, text: "• Stripe Billing + Connect" },
      { id: 5, text: "• Google OAuth + Email Auth" },
      { id: 6, text: "• Resend" },
    ],
    stack: {
      lang: {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-white" />,
      },
      database: {
        name: "Supabase Postgres",
        icon: <FaDatabase className="text-white" />,
      },
      infrastructure: {
        name: "Vercel",
        icon: <SiVercel className="text-white" />,
      },
      metaFramework: {
        name: "Next.js 16 App Router",
        icon: <SiNextdotjs className="text-white" />,
      },
    },
  },
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
    cardDescription:
      "The full-stack estimating app for contractors that became the starting point for ServiceClerk.",
    summary:
      "Estimate Generator is a field service management platform that helps contractors and small businesses create and manage professional work estimates and change orders. Contractors generate estimates for their customers and rely on an automated email system that notifies customers whenever an estimate is created, edited, or updated with a change order. Each customer gets an account created automatically and can review estimates or request changes by signing in through a secure magic link delivered in those emails. It was the starting point for ServiceClerk, the production field service management SaaS I later built and launched.",
    description:
      "Estimate Generator is built on the Next.js 14 App Router with a Supabase PostgreSQL database. The frontend takes full advantage of React Server Components alongside Next.js server-side rendering and caching for fast, SEO-friendly pages. The backend is a REST API built with Next.js route handlers — I chose REST over server actions so the same API can power an upcoming React Native client, follow established REST conventions, and be tested thoroughly with Postman. Authentication and authorization use a JWT and database-session strategy, with credentials-based login for contractors and passwordless magic-link login for their customers. Stripe handles subscription billing, including webhook-driven plan management.",
    loom: "",
    galary: [
      {
        img: "",
        heading: "",
      },
    ],
    bullets: [
      { id: 1, text: "• Next.js 14 / React.js" },
      { id: 2, text: "• React Server Components" },
      { id: 3, text: "• Supabase (PostgreSQL)" },
      { id: 4, text: "• JWT + DB Session Auth" },
      { id: 5, text: "• Stripe Subscription Billing" },
    ],
    stack: {
      lang: {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-white" />,
      },
      database: {
        name: "Supabase Postgres",
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
    projectLabel: "simple-chat",
    projectName: "Simple Chat",
    projectType: "Fullstack Webapp",
    imgSrc: "/chatappchat1.png",
    imgAlt: "Simple Chat",
    prod: "https://socket-io-chat-app-client.vercel.app/",
    github: "https://github.com/MikeLautensack/Socket-IO-Chat-App-Client",
    docs: "",
    href: "/projects/simple-chat",
    cardDescription: "A real-time chat app built with Socket.IO, Next.js, and Express.",
    summary:
      "Simple Chat is a real-time chat application powered by a Node.js and Express server running Socket.IO, deployed on Azure App Service, with a Next.js client hosted on Vercel. Sign in with Google OAuth, create a chat room, and start messaging instantly.",
    description: "",
    loom: "",
    galary: [
      {
        img: "",
        heading: "",
      },
    ],
    bullets: [
      { id: 1, text: "• TypeScript" },
      { id: 2, text: "• Next.js" },
      { id: 3, text: "• Express.js" },
      { id: 4, text: "• Socket.io" },
      { id: 5, text: "• Azure App Service" },
    ],
    stack: {
      lang: {
        name: "TypeScript",
        icon: <BiLogoTypescript className="text-white" />,
      },
      infrastructure: {
        name: "Vercel",
        icon: <SiVercel className="text-white" />,
      },
      frontendFramework: {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" />,
      },
    },
  },
  {
    projectLabel: "html-to-pdf",
    projectName: "HTML to PDF",
    projectType: "Microservice",
    imgSrc: "/htmltopdf.png",
    imgAlt: "Swagger UI for html to pdf",
    prod: "https://html-to-pdf-brf6achxccgteehq.eastus-01.azurewebsites.net/swagger/index.html",
    github: "https://github.com/MikeLautensack/Socket-IO-Chat-App-Client",
    docs: "",
    href: "/projects/html-to-pdf",
    cardDescription:
      "A C# .NET Minimal API microservice that converts HTML into PDF documents.",
    summary:
      "HTML to PDF is a C# .NET microservice built with Minimal APIs and Playwright that converts HTML into polished PDF documents. It is containerized with Docker and deployed on Azure App Service, and exposes an OpenAPI/Swagger UI for exploring and testing its endpoints.",
    description: "",
    loom: "",
    galary: [
      {
        img: "",
        heading: "",
      },
    ],
    bullets: [
      { id: 1, text: "• C#" },
      { id: 2, text: "• .NET" },
      { id: 3, text: "• Azure App Services" },
      { id: 4, text: "• Docker" },
      { id: 5, text: "• Playwright" },
    ],
    stack: {
      lang: {
        name: "C#",
        icon: <RiJavascriptFill className="text-white" />,
      },
      infrastructure: {
        name: "Azure App Service",
        icon: <SiVercel className="text-white" />,
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
    cardDescription: "A 3D galaxy you can customize with a controls menu",
    summary:
      'Galaxy Generator is a project from "Three.js Journey," a course on Three.js and React Three Fiber. Adjust the controls in the top-right panel — star count, size, spin, and colors — and watch the galaxy regenerate in real time. It is built with Vite, JavaScript, Three.js, and dat.GUI.',
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
    cardDescription:
      "A raging sea you can customize with a controls menu, built with custom shaders and rendered with three.js",
    summary:
      'Raging Sea is a project from "Three.js Journey," a course on Three.js and React Three Fiber. Tweak the controls in the top-right panel to reshape the waves, colors, and surface in real time. It is built with Vite, JavaScript, Three.js, dat.GUI, and custom GLSL shaders.',
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
