import "@/styles/globals.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });
  return (
    <>
      <Head>
        <title>Heejra Pelita</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
