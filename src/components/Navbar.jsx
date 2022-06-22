/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavbar = styled.nav`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & img {
    height: 125px;
    width: 125px;
  }
`;
function Navbar({ children }) {
  return <StyledNavbar>{children}</StyledNavbar>;
}

Navbar.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Navbar;
