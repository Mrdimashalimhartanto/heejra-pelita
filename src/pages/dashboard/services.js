import React from "react";
import Footer from "../components/Footer";
import NavbarAboutus from "../components/NavbarAboutus";
import ServiceProduct from "../components/ServiceProduct";
import ServiceSection from "../components/ServiceSection";

function services() {
  return (
    <div>
      <NavbarAboutus />
      <ServiceSection />
      {/* Content */}
      <ServiceProduct />
      <Footer />
    </div>
  );
}

export default services;
