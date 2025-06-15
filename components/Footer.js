import logoImg from "@/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="logo">
          <img src={logoImg.src} alt="website logo" />
        </div>
        <p className="copyright">
          All right reserved for <span className="bold-text">Ayoub Jasim</span>
        </p>
      </div>
    </footer>
  );
}
