import Image from "next/image";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="logo">
          <Image src="/logo.svg" alt="Website logo" width={38} height={38} />
        </div>
        <p className="copyright">
          All right reserved for <span className="bold-text">Ayoub Jasim</span>
        </p>
      </div>
    </footer>
  );
}
