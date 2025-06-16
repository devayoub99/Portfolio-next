import { Roboto } from "next/font/google";
import "@/css/main.css";
import Header from "@/components/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "Ayoub - Portfolio website",
  description: "Developer Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
