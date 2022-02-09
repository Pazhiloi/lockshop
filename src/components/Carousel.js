import styled, { css } from "styled-components";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import { arrowLeft, arrowRight } from "../images";
import { mainSlider } from "../data";
import Button from "./Button";
const width = "1440px",
  height = "600px";
const Container = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  width: ${width};
  .slide__inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide__image {
    width: 600px;
    height: 500px;
  }
  .slide__content {
    max-width: 604px;
    width: 100%;
    height: 433px;
    margin-left: 100px;
    text-align: left;
  }
  .slide__title {
    margin-bottom: 20px;
  }
  .slide__text {
    max-width: 350px;
    width: 100%;
    margin-bottom: 20px;
  }
  .price__label {
    font-size: 12px;
    margin-bottom: 5px;
  }
  .prices {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .price {
    color: #a4a4a4;
    text-decoration: line-through;
    font-size: 22px;
    margin-left: 12px;
    &.current {
      font-size: 24px;
      text-decoration: none;
      margin-left: 0;
      color: #161c24;
    }
  }
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  bottom: -53%;
  width: 10%;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.right
      ? css`
          left: 50%;
        `
      : css`
          left: 40%;
        `}
`;
const Dot = styled.span`
margin-left: 5px;
  .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #add7ff;
    color: transparent;
    cursor: pointer;
    &.active {
      width: 15px;
      height: 15px;
      background-color: #4295e4;
    }
  }
  
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        <img src={arrowLeft} alt="left arrow" />
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        <img src={arrowRight} alt="right arrow" />
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          <span className={index === position ? "dot active" : "dot"}></span>
        </Dot>
      ))}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);
export const MainSlider = () => {
  return (
    <Carousel>
      {mainSlider.map(
        ({ id, image, title, text1, text2, price, currentPrice }) => (
          <Slide key={id} right>
            <div className="slide__inner">
              <img className="slide__image" src={image} alt={title} />
              <div className="slide__content">
                <div className="slide__title title">{title}</div>
                <p className="slide__text fz-14 grey">{text1}</p>
                <p className="slide__text fz-14 grey">{text2}</p>
                <div className="price__label">Цена</div>
                <div className="prices">
                  <div className="price current fw-600">{currentPrice}</div>
                  <div className="price fw-300">{price}</div>
                </div>
                <Button text={`Добавить в корзину`} />
              </div>
            </div>
          </Slide>
        )
      )}
    </Carousel>
  );
}

