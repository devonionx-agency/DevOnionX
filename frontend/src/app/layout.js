import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

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
  metadataBase: new URL("https://www.devonionx.com"),

  title: {
    default: "DevOnionX | Web Development & Software Solutions",
    template: "%s | DevOnionX",
  },

  description:
    "DevOnionX builds modern websites, e-commerce platforms, SaaS products, and custom software solutions for businesses ready to grow.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "DevOnionX | Web Development & Software Solutions",
    description:
      "We build modern websites, e-commerce platforms, SaaS products, and custom software solutions for growing businesses.",
    url: "https://www.devonionx.com",
    siteName: "DevOnionX",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevOnionX | Web Development & Software Solutions",
    description:
      "Modern websites, e-commerce platforms, SaaS products, and custom software solutions for growing businesses.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.devonionx.com/#organization",
  name: "DevOnionX",
  alternateName: "DevOnion",
  url: "https://www.devonionx.com",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <NextTopLoader color="#FF5101" showSpinner={false} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {children}

        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
