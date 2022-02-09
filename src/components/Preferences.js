import React from 'react';
import styled from 'styled-components';
import { preferencesList } from '../data';
import CountItems from './CountItems';

const Preferences = () => {
  return (
    <PreferencesContainer>
      <div className="container">
        <CountItems />
        <h2 className="preferences__title title">Почему GoldenService?</h2>
        <div className="preferences__items">
          {preferencesList.map(({ id, text, image }) => (
            <div className="preferences__item" key={id}>
              <img
                src={image}
                alt="preference img"
                className="preferences__image"
              />
              <p className="preferences__text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </PreferencesContainer>
  );
};

const PreferencesContainer = styled.section`
  padding: 50px 0;
  .preferences {
    &__title {
      margin-bottom: 50px;
    }
    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template: 30px;
    }
    &__item {
      width: 393px;
      min-height: 226px;
      padding: 24px 0;
      box-shadow: inset -1px 0px 0px #c4cdd5, inset 1px 0px 0px #c4cdd5;
      border-left: 1px solid grey;
      border-right: 1px solid grey;
    }
    &__image{
      margin-bottom: 30px;
    }
    &__text{
      margin: 0 auto;
      max-width: 345px;
      width: 100%;
      text-align: center;
    }
  }
`;

export default Preferences;