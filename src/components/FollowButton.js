import React from 'react';
import styled from 'styled-components';

const FollowButton = () => {
  return <FollowButtonContainer>
  Перейти
  </FollowButtonContainer>;
};

const FollowButtonContainer = styled.button`
  width: 220px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  outline: 0;
  border: 1px solid #454f5b;
  background-color: #fff;
  border-radius: 2px;
  cursor: pointer;
`;

export default FollowButton;