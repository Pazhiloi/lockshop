import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import heart from "../assets/heart.png";
import cart from "../assets/cart.png";
const Navigation = () => {
  return (
    <NavigationContainer>
      <div className="container">
        <div className="navigation__inner">
          <div className="navigation__left">
            <img src={logo} alt="logo icon" />
            <nav className="menu">
              <div className="menu__list">
                <Link to={"/"} className="menu__link">
                  Главная
                </Link>
                <div className="menu__item">
                  <span>Каталог</span>{" "}
                </div>
                <Link to={"/solds"} className="menu__link">
                  Оптовая продажа
                </Link>
                <Link to={"/about"} className="menu__link">
                  О нас
                </Link>
              </div>
            </nav>
          </div>
          <div className="navigation__right">
            <div className="navigation__number">
              <img src={phone} alt="phone icon" />
              <span>+7 (966) 55 88 499</span>
            </div>
            <div className="navigation__social">
              <img src={heart} alt="heart icon" />
              <img src={cart} alt="cart icon" />
            </div>
          </div>
        </div>
      </div>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  padding: 20px 0;
  .navigation__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navigation__left,
  .navigation__right,
  .navigation__number,
  .navigation__social,
  .menu__list {
    display: flex;
    align-items: center;
  }
  .navigation__left {
    img {
      height: 42px;
    }
  }
  .menu {
    margin-left: 100px;
    &__link,
    &__item {
      margin-left: 32px;
      color: #161c24;
    }
  }
  .navigation__number {
    span {
      margin-left: 8px;
    }
  }
  .navigation__social {
    margin-left: 30px;
    img {
      cursor: pointer;
    }
    img:not(:first-child) {
      margin-left: 24px;
    }
  }
`;

export default Navigation;
