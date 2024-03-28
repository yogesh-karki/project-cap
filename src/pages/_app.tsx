import "@/styles/globals.css";
import type { AppProps } from "next/app";

import useSnoothScroll from "@/hook/use-smooth-scroll";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  useSnoothScroll();

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
