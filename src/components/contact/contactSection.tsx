import React from "react";

const ContactSection = () => {
  const handleClickPhoneNumber = () => {
    window.location.href = "tel:+821022630201";
  };

  const handleClickEmail = () => {
    window.location.href = "mailto:mazzakorea@gmail.com";
  };

  const handleClickLocation = () => {
    window.open("https://maps.google.com/maps?q=경북 경산시 둥지로 57");
  };

  return (
    <>
      <p className="mb-2" onClick={handleClickLocation} style={{ cursor: "pointer" }}>
        <i className="fa fa-map-marker-alt me-3"></i>
        경북 경산시 둥지로 57 (<small>임당동 647-4</small>)
      </p>
      <p className="mb-2" onClick={handleClickPhoneNumber} style={{ cursor: "pointer" }}>
        <i className="fa fa-phone-alt me-3"></i>+82 10 2263 0201 (<small>KhojiAkbar</small>)
      </p>
      <p className="mb-2" onClick={handleClickEmail} style={{ cursor: "pointer" }}>
        <i className="fa fa-envelope me-3"></i>mazzakorea@gmail.com
      </p>
    </>
  );
};

export default ContactSection;