import React, { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from '../utils/WeatherContext';
import PrimaryCard from './PrimaryCard';

const BottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const BottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const TopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
function LargeWeatherCard() {
  const { setDaysOfTheWeek, currentCard } =
    useContext(WeatherContext);
  const baseUrl = 'https://openweathermap.org/img/wn/';
  const urlExt = '@2x.png';
  return (
    <PrimaryCard>
      <p>{setDaysOfTheWeek(currentCard.dt)}</p>
      <img
        src={baseUrl + currentCard.weather[0].icon + urlExt}
        alt={currentCard.weather[0].icon}
      />
      <p>High: {currentCard.temp.max}° F</p>
      <p>Currently: {currentCard.temp.day}° F</p>
      <p>Low: {currentCard.temp.min} ° F</p>
      <TopLeft>
        {currentCard.weather[0].description.toUpperCase()}
      </TopLeft>
      <TopRight>
        <p>Humidity: {currentCard.humidity}%</p>
      </TopRight>
      <BottomLeft>
        <p>{currentCard.wind_speed} mph</p>
      </BottomLeft>
      <BottomRight>
        <p>UV Index {currentCard.uvi}</p>
      </BottomRight>
    </PrimaryCard>
  );
}

export default LargeWeatherCard;
