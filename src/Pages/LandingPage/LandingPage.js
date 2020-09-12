import React from "react";
import { LandingDiv } from "./LandingPage.style";
import Slider from "../../Components/Slider";
import Quote from "./Partials/Quote";
import Content from "./Partials/Content";
import Content1 from "./Partials/Content1";
import Vision from "./Partials/Vision";

const LandingPage = () => {
  return (
    <>
      <Slider />
      <LandingDiv>
        <Quote />
        <Vision />
        <Content1 />
        <Content />
      </LandingDiv>
    </>
  );
};

export default LandingPage;
