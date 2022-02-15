import { Rating } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers';

const Product = ({
  status,
  statusIcon,
  icon,
  text,
  price,
  currentPrice,
  image,
  reviewsAmount,
  rating,
  id,
}) => {
  return (
    <ProductContainer>
      <div className="item">
        <div className="item__top">
          <div className="icon">
            <img src={statusIcon} alt={status} />
            <span>{status}</span>
          </div>
          <span>SALE</span>
        </div>
        <div className="item__image">
          <img src={image} alt="" />
        </div>
        <div className="info">
          <div className="info__top">
            <div className="info__rating">
              <Rating name="read-only" value={rating} readOnly />
            </div>
            <div className="info__reviews">({reviewsAmount})</div>
          </div>
          <div className="info__name">{text}</div>
          <div className="info__prices">
            <div className="current-price">{formatPrice(currentPrice)}</div>
            <div className="price">{price}</div>
          </div>
        </div>
      </div>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  .item {
    border: 1px solid red;
    padding: 10px;
    max-width: 288px;
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .info {
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    &__name {
      margin-bottom: 30px;
    }
    &__prices {
      display: flex;
      align-items: center;
    }
  }
  .price{
    margin-left: 20px;
  }
`;

export default Product;