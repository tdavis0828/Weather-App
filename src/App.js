import React from 'react';
import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import WeatherComponent from './components/WeatherComponent';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    padding: 0;
    margin: 0;
    height: 100vh;
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &::-webkit-scrollbar {
    width: 10px;
    background: rgba(0, 0, 0, 0.8);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 25px;
  }
    & .header{
      color: #fff;
      font-size: 2rem;
      font-family: 'Nunito', sans-serif;
      padding: 1rem;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <WeatherComponent />
    </div>
  );
}

export default App;
