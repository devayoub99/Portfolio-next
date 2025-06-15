import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./main.css";
import PageHeader from "@/components/page-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayoub - Portfolio website",
  description: "Developer Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="container mx-auto"></div> */}
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
