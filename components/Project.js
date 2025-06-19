import { motion as m } from "framer-motion";

import ProjectLinkIcon from "./ProjectLinkIcon";
import Image from "next/image";

export default function Project(props) {
  return (
    <m.div
      className={`project project-${props.id}`}
      variants={props.variants}
      custom={props.custom}
    >
      <a
        href={props.liveUrl}
        target="_blank"
        className="image"
        rel="noopener noreferrer"
      >
        <Image src={props.imgUrl} alt={`Project ${props.id}`} />
      </a>
      <div className="text">
        <h3>
          <a
            href={props.liveUrl}
            target="_blank"
            className="title"
            rel="noopener noreferrer"
          >
            {props.title}
          </a>
        </h3>
        <div className="icons">
          <ProjectLinkIcon icon="Website" url={props.liveUrl} />
          <ProjectLinkIcon icon="GitHub" url={props.githubUrl} />
        </div>
      </div>
    </m.div>
  );
}
