import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.6);
  height: 34px;
  width: 100px;
  border-radius: 0 15px 15px 0;
  border: none;
  font-size: 1.3rem;
  color: #fff;
  margin: 0.5rem;
  cursor: pointer;
  &:nth-child(2) {
    transform: translate(-25px, 3px);
  }
`;

function Button({ type, children, onClick }) {
  // eslint-disable-next-line react/button-has-type
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.string.isRequired,
};
