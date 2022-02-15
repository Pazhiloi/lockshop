import React, { useState } from 'react';
import styled from 'styled-components';
import { arrowTop } from '../images';
import { filterList } from '../data';
import CheckboxItem from './CheckboxItem';
const FilterItem = ({title}) => {
const [height, setHeight] = useState(false)
  const mapHelper = () => {
  return filterList.map((item) => {
      return <CheckboxItem key={item.id} {...item}/>
    });
  };
  const renderList  = () => {
    if (title === `Цена`) {
      return <p>Цена</p>;
    }
    if (title === `Особенности`) {
      return <div>{mapHelper()}</div>;
    }
    if (title === `Цвет`) {
      return <p>Цвет</p>;
      
    }
    if (title === `Материал`) {
      return <p>Материал</p>;
    }
    if (title === `Размеры`) {
      return <p>Размеры</p>;
    }
    
  }
  return (
    <FilterItemContainer>
      <div
        onClick={() => setHeight(!height)}
        className={height ? "item active" : "item"}
      >
        <div className="item__top">
          <div className="item__title">{title}</div>
          <div className="item__arrow">
            <img src={arrowTop} alt={title} />
          </div>
        </div>
        {}
        <div className={height ? "item__list active" : "item__list"}>
          {height && renderList()}
        </div>
      </div>
    </FilterItemContainer>
  );
};

const FilterItemContainer = styled.div`
  .item {
    margin-bottom: 20px;
    max-height: 26px;
    width: 240px;
    cursor: pointer;
    transition: all 1s ease;
    &.active {
      max-height: 9999px;
    }
    &__list {
      margin-top: 20px;
      opacity: 0;
      transition: all 1s ease;
      &.active {
        opacity: 1;
      }
    }
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default FilterItem;