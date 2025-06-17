import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Portfolio from "@/components/Portfolio";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Landing />
      <Skills />
      <Portfolio />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </>
  );
}
