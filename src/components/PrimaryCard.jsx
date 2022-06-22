import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  & p {
    font-size: 1.2rem;
    padding: 0;
  }
  & > small {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    backdrop-filter: blur(1px);
    z-index: 2
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    font-weight: 100;
    background: rgba(255, 255, 255, 0.6);
    position: sticky;
    top: 0;
    color: #000;
    font-size: 1.6rem;
    padding: 0.5rem;
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
    & p {
      padding: 0;
      margin: .5rem;
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
