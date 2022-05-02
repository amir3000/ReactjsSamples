import React from "react";
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from "./ServicesElements";
import Icon1 from '../images/svg1.svg';
import Icon2 from '../images/undraw_next_js_-8-g5m.svg';
import Icon3 from '../images/undraw_react_y-7-wq.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our Cources Feature </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2> Project Oriented</ServicesH2>
          <ServicesP>Use many projects for Learning Better</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Free Cources</ServicesH2>
          <ServicesP>Free Cources for Learining free whithout stress to pay</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> VIP Accounts</ServicesH2>
          <ServicesP>Access all Cources with only 10$ per month</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
