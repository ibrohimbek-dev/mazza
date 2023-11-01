import React from "react";

const OpeningHoursSection = () => {
  return (
    <>
      <h4 className="section-title ff-secondary text-start text-success fw-normal mb-4">
        Ish boshlash vaqti
      </h4>
      <div className="d-flex flex-column">
        <div className="mb-3">
          <h5 className="text-light fw-normal">Seshanbadan ~ Shanbagacha</h5>
          <p>Tongi: 09:00 ~ Kechki: 21:00</p>
        </div>
        <div>
          <h5 className="text-light fw-normal">Dushanba Kuni</h5>
          <p>Tongi 10:00 ~ Kechki 20:00</p>
        </div>
      </div>
    </>
  );
};

export default OpeningHoursSection;