import Image from "next/image";
import React from "react";

import teamOne from "@/img/team-1.jpg";
import teamTwo from "@/img/team-2.jpg";
import teamThree from "@/img/team-3.jpg";
import teamFour from "@/img/team-4.jpg";
import Link from "next/link";
import Head from "next/head";

const Teams = () => {
  return (
    <>
      <Head>        
        <meta name="description" content="Mazza restoran jamoasi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="team" className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Bizning Jamoa
            </h5>
            <h1 className="mb-5">Bizning Mahoratli Oshpazlarimiz</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image className="img-fluid" src={teamOne} alt="" />
                </div>
                <h5 className="mb-0">Ism & Familiya</h5>
                <small>Manzil & Status</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image className="img-fluid" src={teamTwo} alt="" />
                </div>
                <h5 className="mb-0">Ism & Familiya</h5>
                <small>Manzil & Status</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image className="img-fluid" src={teamThree} alt="" />
                </div>
                <h5 className="mb-0">Ism & Familiya</h5>
                <small>Manzil & Status</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <Image className="img-fluid" src={teamFour} alt="" />
                </div>
                <h5 className="mb-0">Ism & Familiya</h5>
                <small>Manzil & Status</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-success mx-1" href={""}>
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
