import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "@/css/main.css";
import PageHeader from "@/components/page-header";

export const metadata = {
  title: "Ayoub - Portfolio website",
  description: "Developer Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
