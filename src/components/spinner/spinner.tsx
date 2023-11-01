import React, { useEffect } from "react";
import $ from "jquery";


const Spinner: React.FC = () => {
  useEffect(() => {
    "use strict";

    const spinner = () => {
      setTimeout(() => {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    };

    spinner();

  }, []);

  return (
    <div className="container-xxl bg-white p-0">
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;