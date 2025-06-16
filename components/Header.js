import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
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
        <Navbar className="mobile-links" />
        <Navbar className="links" />
      </nav>
    </header>
  );
}
