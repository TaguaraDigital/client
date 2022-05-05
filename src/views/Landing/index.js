import React from "react";
import { SliderData } from "../../data/SliderData";

import Header from "../../components/layout/Header";
import ContactSection from "../../components/layout/ContactSection";
import Footer from "../../components/layout/Footer";
import SlideShow from "../../components/SlideShow";

const Home = () => {
  return (
    <div>
      <Header page="landing" />
      <SlideShow id="home" slides={SliderData} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
