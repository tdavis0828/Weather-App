import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { Card } from './Styles';
import Button from './Button';
import WeatherContext from '../utils/WeatherContext';

function WeatherCards() {
  const {
    weatherData,
    setDaysOfTheWeek,
    setIsClicked,
    getRandomCocktail,
    setCurrentCard,
    currentCity,
    getEvents,
    scroll,
  } = useContext(WeatherContext);
  const baseUrl = 'https://openweathermap.org/img/wn/';
  const urlExt = '@2x.png';
  return weatherData.map((day) => (
    <Card key={nanoid()}>
      <p>{setDaysOfTheWeek(day.dt)}</p>
      <img
        src={baseUrl + day.weather[0].icon + urlExt}
        alt={day.weather[0].icon}
      />
      <div>
        <p>{Math.floor(day.temp.day)}° F</p>
        <p>{day.weather[0].description.toUpperCase()}</p>
      </div>
      <Button
        type="button"
        onClick={() => {
          setCurrentCard(day);
          setIsClicked(true);
          getRandomCocktail();
          getEvents(currentCity[0]);
          scroll();
        }}
      >
        See more
      </Button>
    </Card>
  ));
}

export default WeatherCards;
