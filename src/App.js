import React, { useEffect, useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('Lincoln Memorial');
  const [dailyWeatherData, setDailyWeatherData] = useState([]);

  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Takes the search term and returns the corresponding latitude and longitude
  useEffect(() => {
    const getWeatherData = async () => {
      const GEOCODE_API_KEY =
        'VVKxpVJkzMWe5FTLfys-Ttf4wDQAg1TUic_YZo7I710';
      const res = await fetch(
        `https://geocode.search.hereapi.com/v1/geocode?q=${searchTerm}&apiKey=${GEOCODE_API_KEY}`,
      );
      const data = await res.json();

      const latitude = data.items[0].position.lat;
      const longitude = data.items[0].position.lng;

      const API_KEY = 'cd7ba1a057bb154f06494abea18ffb9f';
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=part,minutely,hourly&units=imperial&appid=${API_KEY}`,
      );
      const weatherData = await weatherRes.json();
      setDailyWeatherData(weatherData.daily);
    };
    // getWeatherData();
  }, [searchTerm]);
  console.log(dailyWeatherData);
  // Convert unix time stamp into the corresponding day of the week
  const setDaysOfTheWeek = (currentTimeStamp) => {
    const date = new Date(currentTimeStamp * 1000);
    const day = date.getDay();
    const formattedTime = `${daysOfTheWeek[day]}`;
    return formattedTime;
  };

  dailyWeatherData.forEach((day) => {
    console.log(setDaysOfTheWeek(day.dt));
  });

  return (
    <div className="App">
      <h1>App goes here.</h1>
    </div>
  );
}

export default App;
