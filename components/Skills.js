"use client";

import Image from "next/image";
import { motion as m } from "framer-motion";

import developerImage from "@/assets/developer.webp";
import { skills } from "@/utils/data";
import { fadeInVariants } from "@/utils/animations";

import Skill from "./Skill";

const fadeInSkillVariants = {
  from: {
    opacity: 0,
    y: 50,
  },
  to: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <m.div
          className="brief"
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
        >
          <m.div
            className="developer-image"
            variants={fadeInVariants}
            custom={0}
          >
            <Image src={developerImage} alt="Developer" />
          </m.div>
          <div className="text">
            <m.h3 className="name" variants={fadeInVariants} custom={1}>
              Ayoub Jasim
            </m.h3>
            <m.p className="description" variants={fadeInVariants} custom={2}>
              I'm a passionate, self-taught{" "}
              <span className="bold-text">Full-stack web developer</span> with a
              strong focus on writing clean, readable, and high-performance
              code. Since beginning my journey in{" "}
              <span className="bold-text">2021</span>, I've continuously grown
              and evolved—embracing new challenges and staying up-to-date with
              the latest technologies. I specialize in building modern,
              cutting-edge web applications using tools like
              <span className="bold-text">
                Next.js, React.js, Tailwind CSS, Express.js, and more
              </span>
              .
            </m.p>
          </div>
        </m.div>
        <m.h2
          className="special-heading"
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
          variants={fadeInVariants}
          custom={3}
        >
          My <span className="colored">Skills</span>
        </m.h2>
        <m.div
          className="skills-container"
          initial="from"
          whileInView="to"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            // <Skill
            //   key={skill.id}
            //   {...skill}
            //   variants={fadeInSkillVariants}
            //   custom={index + 4}
            // />
            <div key={skill.id} className="skill">
              <Image src={skill.image} alt={skill.language} className="image" />
              {skill.language}
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
