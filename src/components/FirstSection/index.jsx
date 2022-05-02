/*

First Section

*/
import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  FirstContainer,
  HeroBg,
  HeroBtnWrap,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./FirstElements";
import Video from "../Videos/BackVideo-SD.mp4";
import { Button } from "../ButtonElements";

const FirstSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <FirstContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>JS Is The King</HeroH1>
          <HeroP>Learning JS and Frameworks</HeroP>
          <HeroBtnWrap>
            <Button primary big to="/" onMouseEnter={onHover} onMouseLeave={onHover} >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrap>
        </HeroContent>
      </FirstContainer>
    </>
  );
};

export default FirstSection;
