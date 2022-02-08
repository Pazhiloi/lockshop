import React from "react";
import styled from "styled-components";
import { footerItems, socialList } from "../data";
import {logo1} from "../images";
const Footer = () => {
  return (
    <FooterContainer>
        <div className="footer__inner">
          <div className="footer__wrapper">
            <img className="footer__logo" src={logo1} alt="logo icon" />
            <div className="footer__social">
              {socialList.map(({ id, image }) => (
                <a key={id} href="#">
                  <img src={image} alt="social icon" />
                </a>
              ))}
            </div>
          </div>
          <div className="footer__items">
            {footerItems.map(({ id, title, list }) => (
              <div key={id} className="footer__item">
                <div className="footer__title fz-18 fw-500">{title}</div>
                <div className="footer__list">{list.map((item) => (
                  <div key={item.id} className="footer__list-item fz-16 fw-300">
                   {item.text}
                  </div>
                ))}</div>
              </div>
            ))}
          </div>
        </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #0d2436;
  box-shadow: inset 0px 1px 0px #c4cdd5;
  padding-top: 25px;
  .footer__inner {
    padding: 55px 0 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .footer__wrapper,
  .footer__items{
    margin-left: 100px;
  }
  .footer__items{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 100px;
  } .footer__logo {
    margin-bottom: 145px;
  }
  .footer__social {
    a:not(:first-child) {
      margin-left: 25px;
    }
  }
  .footer__item {
    color: #fff;
    width: 180px;
  }
  .footer__list-item:not(:last-child) {
    margin-bottom: 15px;
  }
  .footer__title {
    margin-bottom: 25px;
    text-transform: capitalize;
  }
`;

export default Footer;
