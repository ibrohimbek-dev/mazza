import Head from "next/head";
import React from "react";
import ContactSection from "../contact/contactSection";
import SocialSection from "../contact/socialLinks";
import OpeningHoursSection from "../contact/openingHours";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import { auth } from "@/firebase/firebase.config";

const Footer = () => {
  const scrollTop = () => {
    scroll.scrollToTop();
  };  

  const user = auth.currentUser?.email;

  return (
    <>
      <Head>
        <meta name="description" content="Mazza restorani pastki qismi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        id="footer"
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-success fw-normal mb-4">
                Oshxonamiz
              </h4>
              <ScrollLink to="about" className="btn btn-link">
                Biz haqimizda
              </ScrollLink>
              <ScrollLink to="footer" className="btn btn-link">
                Biz bilan bog'laning
              </ScrollLink>
              <ScrollLink to="booking" className="btn btn-link">
                Stol buyurtma qiling
              </ScrollLink>
              <ScrollLink to="privacy" className="btn btn-link">
                Maxfiylik Siyosati
              </ScrollLink>
              <ScrollLink to="terms" className="btn btn-link">
                Foydalanish shartlari
              </ScrollLink>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-success fw-normal mb-4">
                Bog'lanish
              </h4>
              <ContactSection />
              <div className="d-flex pt-2">
                <SocialSection />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <OpeningHoursSection />
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-success fw-normal mb-4">
                Newsletter
              </h4>
              <p>
                Oshxonamiz yangliklaridan xabardor bo'lib turish uchun a'zo
                bo'ling.
              </p>
              <div>
                {!user ? (
                  <Link href="/auth" className="btn btn-primary">
                    A'zo bo'ish
                  </Link>
                ) : (
                  <Link href="/account" className="btn btn-success">
                    Mening Hisobim
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Mazza Oshxonasi,
                </a>Barcha Huquqlar himoyalangan
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <ScrollLink to="/" className="pointer" onClick={scrollTop}>
                    Bosh Sahifa
                  </ScrollLink>
                  <ScrollLink to="/" className="pointer">
                    Cookies
                  </ScrollLink>
                  <ScrollLink to="/" className="pointer">
                    Yordam
                  </ScrollLink>
                  <ScrollLink to="/" className="pointer">
                    Q&A
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
