import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import imgSrc from "@/components/backToTop/up-arrow.png"

const BackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowBackToTop(scrollTop > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>    
      {true && (
        <ScrollLink
          to="#"
          className={`btn-success back-to-top ${showBackToTop ? "show" : ""}`}
          onClick={scrollToTop}
        >

          <Image className="back-to-top-icon" src={imgSrc} alt="back to top image" width={40} height={35}/>          
        </ScrollLink>
      )}
    </>
  );
};

export default BackToTop;