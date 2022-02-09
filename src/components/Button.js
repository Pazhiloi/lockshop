import React from 'react';
import styled from 'styled-components';

const Button = ({text}) => {
  return (
    <ButtonContainer>
      {text}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
color: #fff;
background-color: #4295e4;
height: 50px;
padding: 12px 37px;
font-size: 16px;
font-weight: 500;
border: 0;
outline: 0;
cursor: pointer;
`;

export default Button;