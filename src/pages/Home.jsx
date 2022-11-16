import React, { Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";

import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Courses />
      <ChooseUs />
      <AboutUs />
      <Footer />
    </Fragment>
  );
};

export default Home;
