import React from "react";
import { Logo } from "../../components/Logo/Logo";
import { WaveBorder } from "../../components/WaveBorder/WaveBorder";
import { Title } from "../../components/Title/Title";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import { Illustration } from "../../components/Illustrations/Illustration";
import { OurMotive } from "../../components/OurMotive/OurMotive";
import { BenefitsSec } from "../../components/BenefitsSec/BenefitsSec";
import { Partners } from "../../components/Partners/Partners";
import "./style.css";

export const Land = () => {
  const URL =
    "https://github.com/Abhirajmaid/Landing-Page/blob/master/public/Images/forest.png?raw=true";
  return (
    <>
      <div className="container">
        <div className="land-container">
          <Logo color="white" />
          <Title />
          <CallToAction />
        </div>
        <div className="heroIllustration">
          <Illustration url={URL} h="400px" w="500px" />
        </div>
        <div>
          <WaveBorder />
        </div>
        <OurMotive />
        <BenefitsSec />
        <Partners />
      </div>
    </>
  );
};
