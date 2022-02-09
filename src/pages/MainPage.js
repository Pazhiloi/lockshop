import React from 'react';
import styled from 'styled-components';
import { MainSlider } from '../components/Carousel';
import Preferences from '../components/Preferences';

const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="wrapper">
        <MainSlider/>
        <Preferences/>
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