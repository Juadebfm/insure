import React from "react";
import Lightening from "../assets/icon-snappy-process.svg";
import Prices from "../assets/icon-affordable-prices.svg";

const Different = () => {
  return (
    <section className="different w-100 ">
      <div className="w-50 ">
        <div className="line"></div>
        <h1 className="heading_fix mb-3 text-capitalize">we're different</h1>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center mt-5">
        <div className="details_card">
          <img src={Lightening} alt="a" />
          <span className="fs-3">Snappy Process</span>
          <p className="mt-3">
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </div>
        <div className="details_card">
          <img src={Prices} alt="b" />
          <span className="fs-3">Affordable Prices</span>
          <p className="mt-3">
            We don't want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="details_card">
          <img src={Lightening} alt="a" />
          <span className="fs-3">People First</span>
          <p className="mt-3">
            Our plans aren't full of conditions and clauses to prevent payouts.
            We make sure you're covered when you need it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Different;
