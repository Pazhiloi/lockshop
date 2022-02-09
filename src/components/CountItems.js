import React from 'react';
import styled from 'styled-components';
import { countAnimate } from '../data';

const CountItems = () => {
  return (
    <CountItemsContainer>
      {countAnimate.map(({id, title, number}) => (
        <div className="item" key={id}>
          <div className="item__number fw-600">{number}</div>
          <p className="item__text fw-600 fz-16 grey">{title}</p>
        </div>
      ))}
    </CountItemsContainer>
  );
};

const CountItemsContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template: 50px;
 padding-bottom: 45px;
 .item__number{
   font-size: 32px;
   margin-bottom: 15px;
 }
`

export default CountItems;