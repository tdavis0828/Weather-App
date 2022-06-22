import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 75px;
  widht: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
  font-weight: 200;
`;
function Footer() {
  return (
    <StyledFooter>
      <p>The Weather Company</p>
    </StyledFooter>
  );
}

export default Footer;
