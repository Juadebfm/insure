import React from "react";
import How from "../assets/bg-pattern-how-we-work-desktop.svg";

const Cta = () => {
  return (
    <section className="cta_container">
      <section className="cta d-flex align-items-center justify-content-between position-relative z-1">
        <h1>
          Find out more <br />
          about how we work
        </h1>
        <button className="px-5 py-2 text-uppercase hero_btn mt-4">
          How we work
        </button>
        <img src={How} alt="check" className="position-absolute end-0 z-n1 "/>
      </section>
    </section>
  );
};

export default Cta;
