import React from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import VisiMisi from "../components/VisiMisi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import bpkpk from "../../images/bpkp.jpg";
import fgd from "../../images/fgd.jpg";
import pencegahan from "../../images/pencegahan.png";
import rapatkordinasi from "../../images/rapat-kordinasi.jpg";
import CTAVisi from "../components/CTAVisi";
import NavbarAboutus from "../components/NavbarAboutus";
import Client from "../components/Client";

function aboutus() {
  return (
    <div>
      <NavbarAboutus />
      <AboutUs />
      <VisiMisi />
      <CTAVisi />
      <div className="mt-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <Image src={bpkpk} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={fgd} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={pencegahan} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={rapatkordinasi} />
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <Client />
      <Footer />
    </div>
  );
}

export default aboutus;
