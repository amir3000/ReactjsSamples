/*

Navbar Component

*/
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavBarContainar,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./navbarElements";

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainar>
          <NavLogo to="/" onClick={toggleHome}>
            MegaJS
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="/"
                onClick={toggleHome}
                offset={-80}
                spy={true}
                smooth={true}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to="about" offset={-80} spy smooth={true}>
              About
            </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="cources" offset={-80} spy={true} smooth={true}>
                Cources
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blog" offset={-80} spy={true} smooth={true}>
                Blog
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="roadmap" offset={-80} spy={true} smooth={true}>
                Road Map
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" offset={-80} spy={true} smooth={true}>
                Featurs
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signin" offset={-80} spy={true} smooth={true}>
              Sign in
            </NavBtnLink>
          </NavBtn>
        </NavBarContainar>
      </Nav>
    </>
  );
};

export default Navbar;
