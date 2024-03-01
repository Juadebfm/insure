import React from "react";
import Intro from "../assets/image-intro-desktop.jpg";
import Pattern1 from "../assets/bg-pattern-intro-left-desktop.svg";
import Pattern2 from "../assets/bg-pattern-intro-right-desktop.svg";

const Hero = () => {
  return (
    <section className="hero containerFix d-md-flex">
      <img src={Pattern1} alt="" className="pattern1" />
      <div className="w-100 d-md-order-2">
        <div className="line"></div>
        <h1 className="heading_fix mb-3">
          Humanizing your <br /> insurance
        </h1>
        <p className="w-md-75 w-100 ">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected
        </p>
        <button className="px-5 py-2 text-uppercase hero_btn mt-4">
          View Plans
        </button>
      </div>
      <div className="w-100 d-md-order-1">
        <img src={Intro} alt="check" className="p-5 w-100 main_img" />
      </div>
      <img src={Pattern2} alt="" className="pattern2" />
    </section>
  );
};

export default Hero;
