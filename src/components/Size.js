import React from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_PRODUCTS_BY_SIZE } from '../types/types';

const Size = ({size}) => {  

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({type: FILTER_PRODUCTS_BY_SIZE, size});
  }
  return (
    <div onClick={handleClick}>
      {size}
    </div>
  );
};

export default Size;