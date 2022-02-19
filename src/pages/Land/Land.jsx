import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { Title } from "../../components/Title/Title";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import { IllustrationSec } from "../../components/IllustrationSec/IllustrationSec";
import { OurMotive } from "../../components/OurMotive/OurMotive";
import { BenefitsSec } from "../../components/BenefitsSec/BenefitsSec";
import { Partners } from "../../components/Partners/Partners";
import Accordion from "../../components/Accordian/Accordian";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { BottomCTA } from "../../components/BottomCTA/BottomCTA";
import "./style.css";

export const Land = () => {
  // const URL =
  //   "https://github.com/Abhirajmaid/Landing-Page/blob/master/public/Images/forest.png?raw=true";
  return (
    <>
      <div className="container">
        <div className="land-container">
          <Navbar />
          <Logo color="white" />
          <Title />
          <CallToAction />
          <IllustrationSec />
          <OurMotive />
          <BenefitsSec />
          {/* <Partners /> */}
          <BottomCTA />
          <Accordion />
          <Footer />
        </div>
      </div>
    </>
  );
};
