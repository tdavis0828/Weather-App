/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import PrimaryCard from './PrimaryCard';
import WeatherContext from '../utils/WeatherContext';

function EventCard() {
  const { eventData } = useContext(WeatherContext);
  return (
    <PrimaryCard>
      <small>Events Near You</small>
      {eventData.map((event) => (
        <>
          <p>{event.name}</p>
          <img
            width="350px"
            height="250px"
            src={event.images[0].url}
            alt={event.name}
          />
          <div>
            <p>
              {event.dates.start.localDate} @{' '}
              {event._embedded.venues[0].name}
            </p>
            <a
              href={event.url}
              target="_blank"
              alt="Link to purchase tickets"
              rel="noreferrer"
            >
              {' '}
              Get Tickets
            </a>
          </div>
        </>
      ))}
    </PrimaryCard>
  );
}

export default EventCard;
