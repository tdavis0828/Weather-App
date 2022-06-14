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
  scrollRef: '',
  scroll: () => {},
  setHours: () => {},
});

export default WeatherContext;
