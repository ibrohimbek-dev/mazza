import Image from "next/image";
import React, { useState } from "react";
import useBreakfastFood from "./foodStore/breakfast/breakfast";
import useLunchFood from "./foodStore/lunch/lunch";
import useDinnerFood from "./foodStore/dinner/dinner";
import Head from "next/head";
import ReactStars from "react-stars";
import Thumbnail from "../thumbnail/thumbnail";

const Menu = () => {
  const breakfastFoods = useBreakfastFood();
  const lunchFoods = useLunchFood();
  const dinnerFoods = useDinnerFood();

  const [showMenu, setShowMenu] = useState<string>("tab-1");  

  return (
    <>
      <Head>
        <meta name="description" content="Mazza restoranining menyu bo'limi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="menu" className="container-xxl py-5 menu-items menu-section">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Taomlar Menyusi
            </h5>
            <h1 className="mb-5">Eng Mashxur taomlar</h1>
          </div>
          <div
            className="tab-className text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3 pointer"
                  data-bs-toggle="pill"
                  href="#tab-1"
                  onClick={() => setShowMenu("tab-1")}
                >
                  <i className="fa fa-coffee fa-2x text-success"></i>
                  <div className="ps-3">
                    <small className="text-body">Mashxur</small>
                    <h6 className="mt-n1 mb-0">Nonushta uchun</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3 pointer"
                  data-bs-toggle="pill"
                  href="#tab-2"
                  onClick={() => setShowMenu("tab-2")}
                >
                  <i className="fa fa-hamburger fa-2x text-success"></i>
                  <div className="ps-3">
                    <small className="text-body">Maxsus</small>
                    <h6 className="mt-n1 mb-0">Tushlik uchun</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3 pointer"
                  data-bs-toggle="pill"
                  href="#tab-3"
                  onClick={() => setShowMenu("tab-3")}
                >
                  <i className="fa fa-utensils fa-2x text-success"></i>
                  <div className="ps-3">
                    <small className="text-body">Ishtaxa ochar</small>
                    <h6 className="mt-n1 mb-0">Kechki Tushlik uchun</h6>
                  </div>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {showMenu === "tab-1" && (
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {breakfastFoods.map((foodName, index) => (
                      <div key={index} className="col-lg-6 pointer">
                        <Thumbnail food={foodName} index={index} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {showMenu === "tab-2" && (
                <div id="tab-2" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {lunchFoods.map((foodName, index) => (
                      <div key={index} className="col-lg-6">
                        <Thumbnail food={foodName} index={index} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {showMenu === "tab-3" && (
                <div id="tab-3" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {dinnerFoods.map((foodName, index) => (
                      <div key={index} className="col-lg-6">
                        <Thumbnail food={foodName} index={index} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
