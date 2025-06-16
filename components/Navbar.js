import Image from "next/image";
import { links } from "../utils/data";

export default function Navbar({ className }) {
  const isMobile = className === "mobile-links";

  return (
    <ul className={className}>
      {links.map((link) => {
        return isMobile ? (
          <li className="icon-link" key={link.id}>
            <a
              href={link.linkTo}
              target={link.title === "Resume" ? "_blank" : undefined}
              download={link.title === "Resume"}
            >
              <Image src={link.icon} alt={link.title || "Home"} />
            </a>
          </li>
        ) : (
          link.title && (
            <li className="link" key={link.id}>
              <a
                href={link.linkTo}
                target={link.title === "Resume" ? "_blank" : undefined}
                download={link.title === "Resume"}
              >
                {link.title}
              </a>
            </li>
          )
        );
      })}
    </ul>
  );
}
