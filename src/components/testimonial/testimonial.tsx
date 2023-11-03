import React, { useState } from "react";
import testimonialData from "./testimonial.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import tsOne from "@/img/testimonial-1.jpg";
import tsTwo from "@/img/testimonial-2.jpg";
import tsThree from "@/img/testimonial-3.jpg";
import tsFour from "@/img/testimonial-4.jpg";
import Image from "next/image";
import Head from "next/head";

const tsImages = [tsOne, tsTwo, tsThree, tsFour];

const Testimonial = () => {
  const clients = testimonialData.items.clients;
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Head>
        <meta name="description" content="Mijzolarimiz biz haqimizda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        id="testimonial"
        className="container-xxl py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-success fw-normal">
              Mijozlarimizdan tashakkurnomalar
            </h5>
            <h1 className="mb-5">Mijozlarimiz Biz Haqimizda!!!</h1>
          </div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className={`carousel testimonial-carousel`}
            controls={false}
          >
            {clients.map((item) => (
              <Carousel.Item
                className="testimonial-item"
                key={item.id}
                interval={10000}
              >
                <i className="fa fa-quote-left text-info fa-2x mb-3"></i>
                <p>{item.body}</p>

                <div className="img-container align-items-center">
                  <Image
                    className="img-fluid rounded-circle"
                    alt=""
                    src={tsImages[index]}
                    width={50}
                    height={50}
                  />

                  <div>
                    <h5 className="mb-1">{item.name}</h5>
                    <small>Profession 1</small>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
