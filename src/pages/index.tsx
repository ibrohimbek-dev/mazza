import React from "react";

import {
  About,
  BackToTop,
  Booking,  
  Footer,
  Header,
  Menu,
  Services,
  Spinner,
  Teams,
  Testimonial,
  MyModal
} from "@/components";
import Head from "next/head";
import { useInfoStore } from "@/store";

const Home = () => {
  const {modal} = useInfoStore();

  return (
    <>
      <Spinner />

      <Head>
        <title>Mazza | Restaurant</title>
        <meta
          name="description"
          content="Xush kelibsiz Mazza Restoraniga! Bizning mehmonxonamizda eng zo'r ovqatlarni tajriba qiling va tez-tez boshqa tavsiyalarni o'qing."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Header />      

      <main>      
        <Services />
        <About />
        <Menu />
        <Booking />
        <Teams />
        <Testimonial />
        <Footer />        
        <BackToTop />           
      </main>

      {modal && <MyModal/>}
    </>
  );
};

export default Home;
