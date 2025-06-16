import Image from "next/image";
import Links from "./page-navbar";

export default function PageHeader() {
  return (
    <header className="page-header">
      <nav className="container">
        <h2>
          <a href="/" className="logo">
            <Image
              src="/logo.svg"
              alt="Website logo"
              width={38}
              height={38}
              priority
            />
            <span>ayoub jasim</span>
          </a>
        </h2>
        <Links className="mobile-links" />
        <Links className="links" />
      </nav>
    </header>
  );
}
