import Image from "next/image";
import React from "react";
import palovImg from "@/img/palov.png";
import Head from "next/head";
import {Link as ScrollLink} from "react-scroll"

const Hero = () => {
  return (
    <>
      <Head>        
        <meta name="description" content="Mazza restoranining hero bo'limi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="py-2 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 fw-bold text-white animated slideInLeft">
                Mazali ta'omlardan
                <br />
                Bahra oling
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Assalomu Aleykum! Oshxonamizga xush kelibsiz!
                <br />
                Bizning Mazza nomli oshxanamizda mazza qilib taomlanishingizni
                o'zimiz ta'minlaymiz!
              </p>
              <ScrollLink
                to="booking"
                className="btn btn-info text-white fw-bold py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Xoziroq stol buyurtma qiling!
              </ScrollLink>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <Image
                className={"img-fluid"}
                src={palovImg}
                alt={"hero image"}
              />
            </div>
          </div>
        </div>        
      </div>
    </>
  );
};

export default Hero;
