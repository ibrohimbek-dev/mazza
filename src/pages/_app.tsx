import "../styles/global.css";
import "../styles/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/lib/animate/animate.min.css";
import "@/lib/owlcarousel/assets/owl.carousel.min.css";
import "@/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import "@fortawesome/fontawesome-free/css/all.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import AuthContextProvider from "@/context/auth.context";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (WOW) {
      new WOW().init();
    }
  }, []);

  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
