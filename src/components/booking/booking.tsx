import React, { useEffect } from "react";
import $ from "jquery";
import Head from "next/head";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const Booking = () => {
  const { user } = useAuth();  

  const bookAtable = (event: any) => {
    event.preventDefault();
    alert("Tez orada bu qismini ishga tushiramiz!");
  };

  useEffect(() => {
    $(document).ready(function () {
      let $videoSrc: string;

      $(".btn-play").click(function () {
        $videoSrc = $(this).data("src");
      });

      $("#videoModal").on("shown.bs.modal", function (e: Event) {
        $("#video").attr(
          "src",
          `${$videoSrc}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`
        );
      });

      $("#videoModal").on("hide.bs.modal", function (e: Event) {
        $("#video").attr("src", $videoSrc);
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mazza | Restaurant</title>
        <meta
          name="description"
          content="Mazza restoranida stol buyurtma qiling va zavqli ovqatlanishning qiziqarli tajribasining tadini chiqaring."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="booking">
        <div
          className="container-xxl py-5 px-0 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="row g-0">
            <div className="col-md-6">
              <div className="video">
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-success fw-normal">
                  Joy Buyurtma Qilish
                </h5>
                <h1 className="text-white mb-4">Joylarni Onlayn band qiling</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Ismingiz</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Telefon raqamingiz"
                        />
                        <label htmlFor="phone">Telefon raqamingiz</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="form-floating date"
                        id="date3"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control datetimepicker-input"
                          id="datetime"
                          placeholder="Date & Time"
                          data-target="#date3"
                          data-toggle="datetimepicker"
                        />
                        <label htmlFor="datetime">Sana & Vaqt</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="select1">
                          <option value="1">Bir Kishilik</option>
                          <option value="2">Ikki Kishilik</option>
                          <option value="3">Uch Kishilik</option>
                        </select>
                        <label htmlFor="select1">Band Qiluvchilar soni</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Special Request"
                          id="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label htmlFor="message">Maxsus So'rovnoma</label>
                      </div>
                    </div>
                    <div className="col-12">
                      {user ? (
                        <button
                          className="btn btn-success w-100 py-3"
                          type="submit"
                          onClick={bookAtable}
                        >
                          Band Qilish
                        </button>
                      ) : (
                        <Link
                          className="btn btn-success w-100 py-3"
                          href={"/auth"}
                        >
                          A'zo bo'lish
                        </Link>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="videoModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src=""
                    id="video"
                    allowFullScreen
                    allow="autoplay"
                  ></iframe>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
