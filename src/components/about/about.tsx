import React from "react";
import CountUp, { useCountUp } from "react-countup";

import aboutOne from "../../img/about-1.jpg";
import aboutTwo from "../../img/about-2.jpg";
import aboutThree from "../../img/about-3.jpg";
import aboutFour from "../../img/about-4.jpg";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 100000,
    duration: 2,
    delay: 10,
  });

  const moreRead = () => {
    alert("Coming Soon!")
  }

  return (
    <>
      <Head>        
        <meta
          name="description"
          content="Mazza restorani haqida batafsil ma'lumot. Mazza - bu yengil narsalar restorani, uyushmalar, vaqt o'tkazishlar haqida."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="about" className="container-xxl py-5 about-page">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <Image
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src={aboutOne}
                    alt="Description of the image 1" // Add alt attribute
                  />
                </div>
                <div className="col-6 text-start">
                  <Image
                    className="img-fluid rounded w-85 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={aboutTwo}
                    style={{ marginTop: "25%" }}
                    alt="Description of the image 2" // Add alt attribute
                  />
                </div>
                <div className="col-6 text-end">
                  <Image
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.5s"
                    src={aboutThree}
                    alt="Description of the image 3" // Add alt attribute
                  />
                </div>
                <div className="col-6 text-end">
                  <Image
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={aboutFour}
                    alt="Description of the image 4" // Add alt attribute
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-success fw-normal">
                Biz haqimizda
              </h5>
              <h1 className="mb-4">
                Oshxonamizga{" "}
                <i className="fa fa-utensils text-success me-2"></i>
                Xush kelibsiz
              </h1>
              <p className="mb-4">
                Bizdagi ma'zali taom va shinam joylardan bahra oling
              </p>
              <p className="mb-4">Tashrifingizdan minnatdormiz!</p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-success mb-0"
                      data-toggle="counter-up"
                    >
                      <CountUp end={15} enableScrollSpy />
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Yillik</p>
                      <h6 className="text-uppercase mb-0">
                        Tajribaga ega malakali povurlamiz sizning xizmatingizda
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-success mb-0"
                      data-toggle="counter-up"
                    >
                      <CountUp end={10} enableScrollSpy />
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Mashxur</p>
                      <h6 className="text-uppercase mb-0">
                        Qo'li shirin oshpazalarimiz
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success py-3 px-5 mt-2" onClick={moreRead}>
                Ko'proq o'qish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
