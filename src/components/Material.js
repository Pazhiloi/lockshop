import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_MATERIAL } from '../types/types';

const Material = ({material}) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({type: SET_MATERIAL, material})
  }
  return (
    <div onClick={handleClick}>
      {material}
    </div>
  );
};

export default Material;