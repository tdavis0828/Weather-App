import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propTypes from 'eslint-plugin-react/lib/rules/prop-types';

const StyledPrimaryCard = styled.section`
  &:nth-child(1) {
    width: 20%;
  }
  &:nth-child(3) {
    width: 20%;
  }
  width: 50%;
  height: 65%;
  margin: auto;
  border-radius: 5px;
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-conent: center;
  align-items: center;
  position: relative;
  color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  & > small {
    font-size: 1.6rem;
    padding: 0.5rem;
    text-decoration: underline;
  }
  & div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & a {
      color: #fff;
    }
    & > img {
      height: 100%;
      width: 100%;
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 25px;
  }
  & > p:nth-child(1) {
    font-size: 3rem;
    font-weight: 200;
    text-decoration: underline;
    padding: 0.5rem;
  }
`;

function PrimaryCard({ children }) {
  return <StyledPrimaryCard>{children}</StyledPrimaryCard>;
}

export default PrimaryCard;

PrimaryCard.propTypes = {
  children: PropTypes.node.isRequired,
};
