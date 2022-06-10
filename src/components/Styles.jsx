import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Card = styled.section`
  height: 400px;
  width: 200px;
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.2);
  color: #000;
  border: 0.5px solid rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  & img {
    height: 125px;
    width: 125px;
  }
  & p:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 200;
  }
  & > div {
    & p:nth-child(1) {
      font-size: 1.2rem;
      font-weight: 600;
    }
    & p:nth-child(2) {
      font-weight: 300;
    }
  }

  & button {
    background: none;
    border: none;
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 200;
  }
`;

export default Card;
