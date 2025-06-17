"use client";

import Image from "next/image";
import ArrowIcon from "@/assets/arrow-up.svg";

export default function ScrollToTop() {
  const handleScrollToTop = () => window.scroll(0, 0);
  return (
    <div className="scroll-to-top" onClick={handleScrollToTop}>
      <Image src={ArrowIcon} alt="Go to top" />
    </div>
  );
}
