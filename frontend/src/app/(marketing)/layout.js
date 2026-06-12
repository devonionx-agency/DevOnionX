import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navber";


export default function MarketingLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </>
  );
}
