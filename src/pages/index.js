import Contact from "./components/Contact";
import CTAHeejra from "./components/CTAHeejra";
import CTAHeejra2 from "./components/CTAHeejra2";
import Footer from "./components/Footer";
import HeaderHeejra from "./components/HeaderHeejra";
import PortofolioHeejra from "./components/PortofolioHeejra";
import ProductHeejra from "./components/ProductHeejra";
import Service from "./components/Service";

export default function Home() {
  return (
    <>
      <HeaderHeejra />
      <CTAHeejra />
      <CTAHeejra2 />
      <Service />
      <ProductHeejra />
      {/* <PortofolioHeejra /> */}
      <Contact />
      <Footer />
    </>
  );
}
