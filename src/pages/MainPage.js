import React from 'react';
import styled from 'styled-components';
import { MainSlider } from '../components/Carousel';

const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="wrapper">
        <MainSlider/>
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