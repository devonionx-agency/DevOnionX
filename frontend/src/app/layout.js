import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navber from "@/components/layouts/Navber";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DevOnionX",
    template: "%s | DevOnionX",
  },
  description:
    "We partner with startups and growing businesses to create world-class websites, SaaS platforms, and digital products that deliver real results.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navber />

        <main className="flex-1 pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
