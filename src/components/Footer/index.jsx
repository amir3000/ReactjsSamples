import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItem,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTilte,
  FooterWrap,
  SocialIcons,
  SocialIconsLink,
  SocialLogo,
  SocialMediaContainer,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTilte>About Us</FooterLinkTilte>
              <FooterLink to="home" onClick={toggleHome}>Home</FooterLink>
              <FooterLink to="cources">Cources</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="roadmap">Road Map</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTilte>About Us</FooterLinkTilte>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="cources">Cources</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="roadmap" smooth={true} duration={2000} >Road Map</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItem>
              <FooterLinkTilte>About Us</FooterLinkTilte>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="cources">Cources</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="roadmap">Road Map</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTilte>About Us</FooterLinkTilte>
              <FooterLink to="home">Home</FooterLink>
              <FooterLink to="cources">Cources</FooterLink>
              <FooterLink to="blog">Blog</FooterLink>
              <FooterLink to="roadmap">Road Map</FooterLink>
            </FooterLinkItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        {/* The social media Section */}
        <SocialMediaContainer>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}smooth={true} duration={2000} >Amir Studio</SocialLogo>
            <WebsiteRights>Amir Web Studio 2022</WebsiteRights>
            <SocialIcons>
              <SocialIconsLink>
                <FaFacebook to="/" />
              </SocialIconsLink>
              <SocialIconsLink>
                <FaYoutube />
              </SocialIconsLink>
              <SocialIconsLink>
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink>
                <FaTwitter />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMediaContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
