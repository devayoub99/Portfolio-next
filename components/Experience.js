import { motion as m } from "framer-motion";

import { experience } from "@/utils/data";

const organizationVariants = {
  hidden: {
    y: 40,
    opacity: 0.5,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 140,
    },
  },
};

export default function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <ul className="experience-list">
          {experience.map((organization) => (
            <Organization key={organization.id} details={organization} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Organization({ details }) {
  return (
    <m.li
      className="job-details"
      variants={organizationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="organization">
        <span className="organization-name">{details.organization}</span>
      </div>
      <span className="title-n-duration">
        <span className="job-title">{details.jobTitle}</span>
        <span className="duration">{details.duration}</span>
      </span>
      {details.achievements?.map((achievement, index) => (
        <span className="achievements" key={index}>
          {achievement}
        </span>
      ))}

      {details.liveApps.length ? (
        <div className="apps-container">
          <span className="live-apps">Live Apps: </span>
          {details.liveApps.map((app) => {
            return (
              <a
                key={app.url}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="app"
              >
                {app.name}
              </a>
            );
          })}
        </div>
      ) : null}
    </m.li>
  );
}
