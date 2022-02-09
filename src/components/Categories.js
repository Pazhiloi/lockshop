import React from 'react';
import styled from 'styled-components';
import {mainCategories} from '../data'
import FollowButton from './FollowButton';
import Button from './Button';
const Categories = () => {
  return (
    <CategoriesContainer>
      <div className="container">
        <h2 className="categories__title title">Категории</h2>
        <div className="categories__items">
          {mainCategories.map(({ id, image, text, link }) => (
            <div className="categories__item" key={id}>
              <img src={image} alt="" className="categories__image" />
              <div className="categories__name fw-500">{text}</div>
              <FollowButton />
            </div>
          ))}
        </div>
        <Button text={`Все категории`} />
      </div>
    </CategoriesContainer>
  );
};
const CategoriesContainer = styled.section`
padding: 50px 0;
.categories{
  &__items{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin-bottom: 50px;
  }
  &__item{
    max-width: 600px;
    min-height: 470px;
    width: 100%;
  }
  &__name{
  text-align: left;
    font-size: 22px;
    margin-bottom: 16px;
  }
}
`
export default Categories;