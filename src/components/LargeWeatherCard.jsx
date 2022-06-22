import React, { useContext } from 'react';
import styled from 'styled-components';
import WeatherContext from '../utils/WeatherContext';
import PrimaryCard from './PrimaryCard';
import sunrise from '../sunrise.png';
import sunset from '../sunset.png';

const BottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  & div {
    & img {
      width: 50px;
      height: 50px;
    }
  }
`;

const BottomLeft = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  & div {
    & img {
      width: 50px;
      height: 50px;
    }
  }
`;

const TopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  & div {
    & img {
      width: 50px;
      height: 50px;
    }
  }
`;

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  & div {
    & img {
      width: 50px;
      height: 50px;
    }
  }
`;
function LargeWeatherCard() {
  const { setDaysOfTheWeek, currentCard, scrollRef, setHours } =
    useContext(WeatherContext);
  const baseUrl = 'https://openweathermap.org/img/wn/';
  const urlExt = '@2x.png';
  return (
    <PrimaryCard>
      <p>{setDaysOfTheWeek(currentCard.dt)}</p>
      <img
        ref={scrollRef}
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
        <div>
          <img src={sunrise} alt="sun rise" />
          <p>{setHours(currentCard.sunrise)} A.M.</p>
        </div>
      </BottomLeft>
      <BottomRight>
        <p>UV Index {currentCard.uvi}</p>
        <div>
          <img src={sunset} alt="sunset" />
          <p>{setHours(currentCard.sunset)} P.M.</p>
        </div>
      </BottomRight>
    </PrimaryCard>
  );
}

export default LargeWeatherCard;
