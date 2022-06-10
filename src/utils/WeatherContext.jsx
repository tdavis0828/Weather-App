import { createContext } from 'react';

const WeatherContext = createContext({
  weatherData: [],
  setDaysOfTheWeek: () => {},
  isClicked: false,
  currentCard: '',
  setIsClicked: () => {},
  setCurrentCard: () => {},
  searchTerm: '',
  getRandomCocktail: () => {},
  getEvents: () => {},
});

export default WeatherContext;
