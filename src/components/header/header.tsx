import Head from "next/head";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import React, { useEffect, useState, useContext } from "react";
import { Hero } from "@/components";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import { auth } from "@/firebase/firebase.config";
import { AuthContext } from "@/context/auth.context";


const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { user: currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid
    

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  const handleNavClick = (linkId: string) => {
    setActiveLink(linkId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    "use strict";

    $(".navbar").addClass("sticky-top shadow-sm");

    return () => {
      $(".navbar").removeClass("sticky-top shadow-sm");
    };
  }, []);

  useEffect(() => {
    "use strict";
    const $dropdown = $(".dropdownMenu");

    function handleDropdownHover(this: HTMLElement) {
      const $this = $(this);
      $this.toggleClass("show", $this.is(":hover"));
      $this
        .find(".dropdown-toggle")
        .attr("aria-expanded", $this.hasClass("show") ? "true" : "false");
      $this.find(".dropdown-menu").toggleClass("show", $this.hasClass("show"));
    }

    if (window.matchMedia("(min-width: 100px)").matches) {
      $dropdown.hover(handleDropdownHover, handleDropdownHover);
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Mazza restoranining bosh sahifasi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header
        className={`bg-dark position-relative p-0 header-class ${
          activeLink === "scroll" ? "sticky-top shadow-sm" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <div
            className="pointer navbar-brand p-0 d-flex justify-content-between align-items-center"
            onClick={scrollTop}
          >
            <div className="d-flex align-items-center">
              <img
                src="/logo.png"
                alt="logo"
                className="img-contain h-auto w-auto cursor-pointer rounded-circle mx-4"
              />
              <h1 className="text-success m-0">
                <i className="fa fa-utensils text-bold me-3"></i>Mazza
              </h1>
            </div>
          </div>

          <button
            className={`btn btn-success navbar-toggler ${
              isMenuOpen ? "collapsed" : ""
            }`}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="fa fa-bars text-white" />
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <div className="navbar-nav ms-auto py-0 pe-4">
              <ScrollLink
                to="about"
                smooth={true}
                duration={300}
                className={`nav-item nav-link ${
                  activeLink === "about" ? "active" : ""
                }`}
                onClick={() => handleNavClick("about")}
              >
                Biz haqimizda
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth={true}
                duration={300}
                className={`nav-item nav-link ${
                  activeLink === "services" ? "active" : ""
                }`}
                onClick={() => handleNavClick("services")}
              >
                Xizmatlarimiz
              </ScrollLink>
              <ScrollLink
                to="menu"
                smooth={true}
                duration={300}
                className={`nav-item nav-link ${
                  activeLink === "menu" ? "active" : ""
                }`}
                onClick={() => handleNavClick("menu")}
              >
                Menyu
              </ScrollLink>
              <div className="nav-item dropdownMenu">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  id="pagesDropdown"
                  role="button"
                  data-bs-toggle="dropdownMenu"
                  aria-expanded="false"
                >
                  Sahifalar
                </a>
                <ul
                  className={`dropdown-menu dropdown-menu-items`}
                  aria-labelledby="pagesDropdown"
                >
                  <li>
                    <ScrollLink
                      to="booking"
                      smooth={true}
                      duration={300}
                      className={`dropdown-item pointer ${
                        activeLink === "booking" ? "active" : ""
                      }`}
                      onClick={() => handleNavClick("booking")}
                    >
                      Stol Buyurtma qilish
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="team"
                      smooth={true}
                      duration={300}
                      className={`dropdown-item pointer ${
                        activeLink === "team" ? "active" : ""
                      }`}
                      onClick={() => handleNavClick("team")}
                    >
                      Bizning jamoamiz
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="testimonial"
                      smooth={true}
                      duration={300}
                      className={`dropdown-item pointer ${
                        activeLink === "testimonial" ? "active" : ""
                      }`}
                      onClick={() => handleNavClick("testimonial")}
                    >
                      Tabriklar
                    </ScrollLink>
                  </li>
                  <li>
                    {userId ? (
                      <>
                        <Link
                          href={"/account"}
                          className={`dropdown-item pointer ${
                            activeLink === "account" ? "active" : ""
                          }`}
                          onClick={() => handleNavClick("account")}
                        >
                          Ma'lumotlarim
                        </Link>
                        <Link
                          href={"/cart"}
                          className={`dropdown-item pointer ${
                            activeLink === "account" ? "active" : ""
                          }`}
                          onClick={() => handleNavClick("account")}
                        >
                          Savatcha
                        </Link>
                      </>
                    ) : (
                      <Link
                        href={"/auth"}
                        className={`dropdown-item pointer ${
                          activeLink === "auth" ? "active" : ""
                        }`}
                        onClick={() => handleNavClick("auth")}
                      >
                        A'zo bo'lish
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
              <ScrollLink
                to="footer"
                smooth={true}
                duration={300}
                className={`nav-item nav-link ${
                  activeLink === "footer" ? "active" : ""
                }`}
                onClick={() => handleNavClick("footer")}
              >
                Bog'lanish
              </ScrollLink>
            </div>
            <ScrollLink
              to="booking"
              smooth={true}
              duration={300}
              className={`btn order-btn btn-success text-white py-2 px-4 ${
                activeLink === "order" ? "active" : ""
              }`}
              onClick={() => {
                handleNavClick("order");
                setIsMenuOpen(false);
              }}
            >
              Buyurtma
            </ScrollLink>
          </div>
        </nav>

        <Hero />
      </header>
    </>
  );
};

export default Header;
