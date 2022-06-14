/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import SearchField from './Input';
import Button from './Button';
import WeatherCards from './WeatherCards';
import EventCard from './EventCard';
import CocktailCard from './CocktailCard';
import LargeWeatherCard from './LargeWeatherCard';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from '../Logo.png';
import WeatherContext from '../utils/WeatherContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 84vh;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const PrimaryCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  transition: all 0.35s ease;
`;

function WeatherComponent() {
  const scrollRef = useRef();
  const [isClicked, setIsClicked] = useState(false);
  const [currentCard, setCurrentCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Carson, CA');
  const [weatherData, setWeatherData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [randomDrink, setRandomDrink] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);

  // Get users current location
  useEffect(() => {
    const getUserLocation = () => {
      const coords = [];
      // eslint-disable-next-line no-undef
      navigator.geolocation.getCurrentPosition((postion) => {
        coords.push(
          postion.coords.latitude,
          postion.coords.longitude,
        );
      });
      // setSearchTerm(coords[0], coords[1])
      return coords;
    };
    getUserLocation();
  }, []);

  // Takes the search term and returns the corresponding latitude and longitude
  const getWeatherData = async (str) => {
    // Get latitude and longitude
    const GEOCODE_KEY = process.env.REACT_APP_GEOCODE_API_KEY;
    const res = await fetch(
      `https://geocode.search.hereapi.com/v1/geocode?q=${str}&apiKey=${GEOCODE_KEY}`,
    );
    const data = await res.json();
    const latitude = data.items[0].position.lat;
    const longitude = data.items[0].position.lng;

    // Reverse Geocoding to esure the right city and state is displayed
    const searchedAddressRes = await fetch(
      `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&apiKey=${GEOCODE_KEY}`,
    );
    const searchedAddressData = await searchedAddressRes.json();
    setCurrentCity([
      searchedAddressData.items[0].address.city,
      searchedAddressData.items[0].address.state,
    ]);

    // Use latitude and longitude to fetch weather data
    const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=part,minutely,hourly&units=imperial&appid=${WEATHER_API_KEY}`,
    );
    const weatherDataRes = await weatherRes.json();
    setWeatherData(weatherDataRes.daily);
  };

  // Initialize days of the week to compare in setDaysOfTheWeek()
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Convert unix timestamp from weather data into the corresponding day of the week
  const setDaysOfTheWeek = (currentTimeStamp) => {
    const date = new Date(currentTimeStamp * 1000);
    const day = date.getDay();
    const formattedDay = `${daysOfTheWeek[day]}`;
    return formattedDay;
  };

  // Convert unix timestamp from weather data to a readable timestamp
  const setHours = (currentTimestamp) => {
    const date = new Date(currentTimestamp * 1000);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const formatedHours = `${hour}:${minutes}`;
    return formatedHours;
  };

  // Pull events relevent to the value of current city
  const getEvents = async (str) => {
    const apiKey = '4YzxxzHX4AtM9B6gwUEvKCUpFKuGsf41';
    const res = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=${apiKey}&city=${str}`,
    );
    const eventDataRes = await res.json();
    // eslint-disable-next-line no-underscore-dangle
    setEventData(eventDataRes._embedded.events);
  };

  // Get the random cocktail recipe
  const getRandomCocktail = async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
    );
    const recipe = await res.json();
    setRandomDrink(recipe.drinks[0]);
  };

  // Click to scroll to large information card
  const scroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Re-run search query upon submit with updated search term
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(searchTerm);
    getEvents(currentCity[0]);
    setSearchTerm('');
    setIsClicked(false);
  };

  // Get data for initial render
  useEffect(() => {
    getEvents(currentCity[0]);
  }, [currentCity]);

  useEffect(() => {
    getWeatherData(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar>
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <SearchField
            placeHolder="Search for a City, Monument, or an address"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit">
            <i className="fa-solid fa-magnifying-glass" />
          </Button>
        </form>
      </Navbar>
      <Wrapper>
        <CardWrapper>
          <WeatherContext.Provider
            value={{
              weatherData,
              setDaysOfTheWeek,
              isClicked,
              setIsClicked,
              currentCity,
              setCurrentCard,
              searchTerm,
              getRandomCocktail,
              getEvents,
              scrollRef,
              scroll,
            }}
          >
            {weatherData.length ? (
              <WeatherCards />
            ) : (
              <div className="lds-hourglass" />
            )}
          </WeatherContext.Provider>
        </CardWrapper>
        {currentCity.length ? (
          <p className="header">
            Current forecast for {currentCity[0]}, {currentCity[1]}
          </p>
        ) : (
          ''
        )}
      </Wrapper>
      {isClicked === true && (
        <PrimaryCardWrapper>
          <WeatherContext.Provider
            value={{
              currentCard,
              setDaysOfTheWeek,
              randomDrink,
              eventData,
              scrollRef,
              setHours,
            }}
          >
            {eventData && <EventCard />}
            <LargeWeatherCard ref={scrollRef} />
            <CocktailCard />
          </WeatherContext.Provider>
        </PrimaryCardWrapper>
      )}
      <Footer />
    </>
  );
}

export default WeatherComponent;
