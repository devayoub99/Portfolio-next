import homeIcon from "@/assets/home.svg";
import skillsIcon from "@/assets/skills.svg";
import portfolioIcon from "@/assets/portfolio.svg";
import resumeIcon from "@/assets/resume.svg";
import contactIcon from "@/assets/contact.svg";

import htmlImage from "@/assets/skills/HTML.svg";
import cssImage from "@/assets/skills/CSS.svg";
import sassImage from "@/assets/skills/Sass.svg";
import bootstrapImage from "@/assets/skills/Bootstrap.svg";
import gitImage from "@/assets/skills/Git.svg";
import gitHubImage from "@/assets/skills/GitHub.svg";
import javaScriptImage from "@/assets/skills/JavaScript.svg";
import typeScriptImage from "@/assets/skills/TypeScript.svg";
import tailwindCSSImage from "@/assets/skills/TailwindCSS.svg";
import reactJSImage from "@/assets/skills/React.svg";
import nextJSImage from "@/assets/skills/NextJS.svg";
import expressJSImage from "@/assets/skills/ExpressJS.svg";
import mySQLImage from "@/assets/skills/MySQL.svg";
import mongoDBImage from "@/assets/skills/MongoDB.svg";

import youtubeProjectImg from "@/assets/youtube.webp";
import portfolioProjectImg from "@/assets/new.webp";
import oldPortfolioProjectImg from "@/assets/old.webp";
import ecoProjectImg from "@/assets/eco.webp";

import linkedinImg from "@/assets/linkedin.svg";
import discordImg from "@/assets/discord.svg";
import facebookImg from "@/assets/facebook.svg";
import emailImg from "@/assets/email.svg";

const links = [
  {
    id: 1,
    icon: homeIcon,
    linkTo: "#",
  },
  {
    id: 2,
    title: "Skills",
    icon: skillsIcon,
    linkTo: "#skills",
  },
  {
    id: 3,
    title: "Portfolio",
    icon: portfolioIcon,
    linkTo: "#portfolio",
  },
  {
    id: 4,
    title: "Contact",
    icon: contactIcon,
    linkTo: "#contact",
  },
  {
    id: 5,
    title: "Resume",
    icon: resumeIcon,
    linkTo: "/Ayoub_Jasim_Software_developer.pdf",
  },
];

const skills = [
  {
    id: 1,
    language: "HTML",
    image: htmlImage,
  },
  {
    id: 2,
    language: "CSS",
    image: cssImage,
  },
  {
    id: 3,
    language: "JavaScript",
    image: javaScriptImage,
  },
  {
    id: 4,
    language: "TypeScript",
    image: typeScriptImage,
  },
  {
    id: 5,
    language: "SASS",
    image: sassImage,
  },
  {
    id: 6,
    language: "Bootstrap",
    image: bootstrapImage,
  },
  {
    id: 7,
    language: "Git",
    image: gitImage,
  },
  {
    id: 8,
    language: "GitHub",
    image: gitHubImage,
  },
  {
    id: 9,
    language: "TailwindCSS",
    image: tailwindCSSImage,
  },
  {
    id: 10,
    language: "React.js",
    image: reactJSImage,
  },
  {
    id: 11,
    language: "Next.js",
    image: nextJSImage,
  },
  {
    id: 12,
    language: "Express.js",
    image: expressJSImage,
  },
  {
    id: 13,
    language: "MySQL",
    image: mySQLImage,
  },
  {
    id: 14,
    language: "MongoDB",
    image: mongoDBImage,
  },
];

const projects = [
  {
    id: 1,
    title: "YouTube - Cloned",
    description:
      "Clone YouTube using ReactJS and youtube v3 API. Offers some good features of YouTube.",
    liveUrl: "https://youtube-cloned.devayb.com/",
    githubUrl: "https://github.com/devayoub99/YouTube---Cloned",
    imgUrl: youtubeProjectImg,
  },
  {
    id: 2,
    title: "My portfolio website",
    description:
      "My new portfolio website, created using React, Framer-motion and SCSS",
    liveUrl: "https://devayb.com/",
    githubUrl: "https://github.com/devayoub99/Portfolio-website---ReactJS",
    imgUrl: portfolioProjectImg,
  },
  {
    id: 3,
    title: "E-commerce Website",
    description:
      "Ecommerce website Build from scratch, Using HTML, SCSS, JavaScript and RESTful API",
    liveUrl: "https://eco.devayb.com/",
    githubUrl: "https://github.com/devayoub99/Ecommerce-website",
    imgUrl: ecoProjectImg,
  },
  {
    id: 4,
    title: "Old portfolio website",
    description: "My portfolio website, with HTML, JavaScript and SCSS.",
    liveUrl: "https://old.devayb.com/",
    githubUrl: "https://github.com/devayoub99/Portfolio-website",
    imgUrl: oldPortfolioProjectImg,
  },
  {
    id: 5,
    title: "YouTube - Cloned",
    description:
      "Clone YouTube using ReactJS and youtube v3 API. Offers some good features of YouTube.",
    liveUrl: "https://youtube-cloned.devayb.com/",
    githubUrl: "https://github.com/devayoub99/YouTube---Cloned",
    imgUrl: youtubeProjectImg,
  },
  {
    id: 6,
    title: "My portfolio website",
    description:
      "My new portfolio website, created using React, Framer-motion and SCSS",
    liveUrl: "https://devayb.com/",
    githubUrl: "https://github.com/devayoub99/Portfolio-website---ReactJS",
    imgUrl: portfolioProjectImg,
  },
];

const socialMedia = [
  {
    id: 1,
    title: "facebook",
    img: facebookImg,
    url: "https://www.facebook.com/profile.php?id=100085270735685",
  },
  {
    id: 2,
    title: "discord",
    img: discordImg,
    url: "https://discord.com/users/869210911863361567",
  },
  {
    id: 3,
    title: "linkedin",
    img: linkedinImg,
    url: "https://www.linkedin.com/in/ayoubjasim/",
  },
  {
    id: 4,
    title: "Email",
    img: emailImg,
    url: "mailTo:admin@devayb.com",
  },
];

export { links, skills, projects, socialMedia };
