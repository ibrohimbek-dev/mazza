import Head from "next/head";
import React from "react";

const Services = () => {
  return (
    <>
      <Head>        
        <meta name="description" content="Mazza restorani xizmatlar bo'limi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="services" className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-info fw-normal">
              Our Services
            </h5>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie text-info mb-4"></i>
                  <h5>Ma'lakali Povurlar</h5>
                  <p>Ma'alaki oshpazlarimiz endi sizning xizmatingizda</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-utensils text-info mb-4"></i>
                  <h5>Ma'zali Taom</h5>
                  <p>Mazza nomli oshxanamizda ma'zali taomlardan bahra oling</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cart-plus text-info mb-4"></i>
                  <h5>Onlayn Xarid</h5>
                  <p>
                    Endi taom yoki O'rindiqlarni onlayn xarid yoki buyurtma
                    qiling!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-headset text-info mb-4"></i>
                  <h5>24/7 Xizmat</h5>
                  <p>Biz siz uchun 24 / 7 xizmatingizdamiz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
