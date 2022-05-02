/*

Home Page

*/

import React, { useState } from "react";
import FirstSection from "../FirstSection";
import Footer from "../Footer/Footer";
import InfoSection from "../InfoSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTow } from "../InfoSection/Data";
import { Navbar } from "../Navbar";
import Services from "../Services";
import Sidebar from "../Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FirstSection />
      <InfoSection {...homeObjOne} /> 
      <InfoSection {...homeObjTow} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
