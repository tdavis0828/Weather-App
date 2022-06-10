/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import PrimaryCard from './PrimaryCard';
import WeatherContext from '../utils/WeatherContext';

function EventCard() {
  const { eventData } = useContext(WeatherContext);
  return (
    <PrimaryCard>
      <small>Wanna get out?</small>
      <img
        width="350px"
        height="250px"
        src={eventData.events[0].images[8].url}
        alt={eventData.events[0].name}
      />
      <div>
        <p>{eventData.events[0].name}</p>
        <p>
          Genre: {eventData.events[0].classifications[0].segment.name}
        </p>
        <p>
          {eventData.events[0].dates.start.localDate} @{' '}
          {eventData.events[0]._embedded.venues[0].name}
        </p>
        <a
          href={eventData.events[0].url}
          target="_blank"
          rel="noreferrer"
        >
          Get Tickets
        </a>
      </div>
    </PrimaryCard>
  );
}

export default EventCard;
