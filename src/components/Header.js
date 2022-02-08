import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import Top from './Top';

const Header = () => {
  return <HeaderContainer>
  <Top/>
  <Navigation/>
  </HeaderContainer>;
};

const HeaderContainer = styled.header`
padding-bottom: 40px;
`

export default Header;