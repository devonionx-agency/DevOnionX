import ContactHero from "@/components/sections/contact/ContactHero";

export const metadata = {
  title: "Contact Us | Start Your Project",
  description:
    "Get in touch with DevOnionX to discuss your website, e-commerce, SaaS, or custom software project. Let's find the right solution for your business.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact DevOnionX | Start Your Project",
    description:
      "Have a project in mind? Contact DevOnionX to discuss your goals and explore the right web or software solution.",
    url: "/contact",
    siteName: "DevOnionX",
    type: "website",
  },
};

const Contact = () => {
  return (
    <div>
      <ContactHero />
    </div>
  );
};

export default Contact;
