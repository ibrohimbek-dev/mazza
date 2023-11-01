import React from "react";
import Link from "next/link"


const AdminContact = () => {
  const handleEmailClick = () => {
    window.open("mailto:ibrohimbek2701@gmail.com");
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+8210 8337 9909";
    window.open(`tel:${phoneNumber}`, "_blank");
  }; 

  return (
    <div className="form-group mb-3">
      <label className="mb-2">Admin bilan bog'lanish:</label>
      <div className="form-control contact-admin-icons">
        <Link href={"#"} className="mr-2" onClick={handleEmailClick}>
          <i className="bi bi-envelope-fill mr-1"></i>
        </Link>
        <Link target="_blank" href="https://telegram.me/username" className="mr-2">
          <i className="bi bi-telegram"></i>
        </Link>
        <Link target="_blank" href="https://www.instagram.com/username" className="mr-2">
          <i className="bi bi-instagram"></i>
        </Link>
        <Link target="_blank" href="https://www.facebook.com/username" className="mr-2">
          <i className="bi bi-facebook"></i>
        </Link>
        <Link target="_blank" href="#" className="mr-2" onClick={handlePhoneClick}>
          <i className="bi bi-telephone-fill"></i>
        </Link>
      </div>
    </div>
  );
};

export default AdminContact;
