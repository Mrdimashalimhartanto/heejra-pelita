import BannerClient from "./components/BannerClient";
import BannerHeejra from "./components/BannerHeejra";
import BannerJobActivities from "./components/BannerJobActivites";
import BannerKontak from "./components/BannerKontak";
import BannerLegal from "./components/Bannerlegal";
import BannerService from "./components/BannerService";
import Client from "./components/Client";
import Contact from "./components/Contact";
import JobActivities from "./components/ContentJobActivities";
import CTAHeejra from "./components/CTAHeejra";
import CTAHeejra2 from "./components/CTAHeejra2";
import Footer from "./components/Footer";
import HeaderHeejra from "./components/HeaderHeejra";
import LegalStanding from "./components/LegalStanding";
import PortofolioHeejra from "./components/PortofolioHeejra";
import ProductHeejra from "./components/ProductHeejra";
import Service from "./components/Service";

export default function Home() {
  return (
    <>
      <HeaderHeejra />
      <CTAHeejra />
      <BannerHeejra />
      <CTAHeejra2 />
      <BannerService />
      <Service />
      <BannerClient />
      <Client />
      <BannerJobActivities />
      <JobActivities />
      <BannerLegal />
      <LegalStanding />
      <BannerKontak />
      <Contact />
      <Footer />
    </>
  );
}
