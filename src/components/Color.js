import React from 'react';
import { useDispatch } from 'react-redux';
import { FILTER_BY_COLOR } from '../types/types';
const Color = ({color}) => {
  
  const dispatch = useDispatch()
    const handleColor = (color) => {
        dispatch({ type: FILTER_BY_COLOR, color })
    };

  return (
    <div
      style={{ background: color }}
      className={"color"}
      onClick={() => handleColor(color)}
    >
    </div>
  );
};

export default Color;