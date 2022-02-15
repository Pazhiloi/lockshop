import React from 'react';
import styled from 'styled-components';
import { MainSlider } from '../components/Carousel';
import Preferences from '../components/Preferences';
import Categories from '../components/Categories';
import { PopularSlider } from '../components/PopularCarousel';

const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="wrapper">
        <MainSlider/>
        <Preferences/>
        <Categories/>
        <PopularSlider/>
      </div>
    </MainPageContainer>
  );
};


const MainPageContainer = styled.div`
  .wrapper {
    padding: 40px 0;
    text-align: center;
  }
`;
export default MainPage;