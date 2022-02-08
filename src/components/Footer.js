import React from "react";
import styled from "styled-components";
import { socialList } from "../data";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__wrapper">
            {/* <img src={logo} alt="logo icon" /> */}
            <div className="footer__social">
              {socialList.map(({ id, image }) => (
                <a key={id} href="#">
                  <img src={image} alt="social icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #0d2436;
  box-shadow: inset 0px 1px 0px #c4cdd5;
  padding-top: 25px;
`;

export default Footer;
