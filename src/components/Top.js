import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Top = () => {
  return (
    <TopContainer>
      <div className="top__inner">
        <div className="top__info fz-16 fw-500">
          Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
        </div>
        <Link to={"/"} className="top__link fz-16 fw-500">
          Обратный звонок
        </Link>
      </div>
    </TopContainer>
  );
};
const TopContainer = styled.div`
  background-color: #454f5b;
  padding: 9px 0;
  .top__inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top__info {
    color: #fff;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .top__link {
    color: #fff;
    margin-left: auto;
    margin-right: 100px;
    position: relative;
    border-bottom: 1px solid #fff;
  }
`;
export default Top;
