import React, { useContext } from 'react';
import WeatherContext from '../utils/WeatherContext';
import PrimaryCard from './PrimaryCard';

function CocktailCard() {
  const { randomDrink } = useContext(WeatherContext);
  return (
    <PrimaryCard>
      <small>Long Day?</small>
      <div className="randomDrink">
        <p>The {randomDrink.strDrink}</p>
        <p>Type: {randomDrink.strCategory}</p>
        <img
          src={randomDrink.strDrinkThumb}
          alt={randomDrink.strDrink}
        />
        <ul>
          <li>
            {randomDrink.strMeasure1} {randomDrink.strIngredient1}
          </li>
          <li>
            {randomDrink.strMeasure2} {randomDrink.strIngredient2}
          </li>
          {randomDrink.strMeasure3 !== null && (
            <li>
              {randomDrink.strMeasure3} {randomDrink.strIngredient3}
            </li>
          )}
          {randomDrink.strMeasure4 !== null && (
            <li>
              {randomDrink.strMeasure4} {randomDrink.strIngredient4}
            </li>
          )}
          {randomDrink.strMeasure5 !== null && (
            <li>
              {randomDrink.strMeasure5} {randomDrink.strIngredient5}
            </li>
          )}
          {randomDrink.strMeasure6 !== null && (
            <li>
              {randomDrink.strMeasure6} {randomDrink.strIngredient6}
            </li>
          )}
          {randomDrink.strMeasure7 !== null && (
            <li>
              {randomDrink.strMeasure7} {randomDrink.strIngredient7}
            </li>
          )}
        </ul>
        <p>Intructions: {randomDrink.strInstructions}</p>
      </div>
    </PrimaryCard>
  );
}
export default CocktailCard;
