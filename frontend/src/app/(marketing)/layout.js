import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navber";

export default function MarketingLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
